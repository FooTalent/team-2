using AutoMapper;
using CashFlow.DataBase.Entities;
using System.Net;
using CashFlow.Utils;
using CashFlow.Modules.Money;
using CashFlow.Modules.Budget.Dtos;
using CashFlow.Modules.Budget.Interfaces;

namespace CashFlow.Modules.Budget
{
    public class BudgetService(IBudgetRepository budgetRepository, MoneyRepository moneyRepository, IMapper mapper
        ) : IBudgetService
    {
        private readonly IBudgetRepository _budgetRepository = budgetRepository;
        private readonly IMapper _mapper = mapper;
        private readonly MoneyRepository _moneyRepository = moneyRepository;


        public async Task<BudgetGenericDto> Create(BudgetCreateDto budgetDto)
        {
            BudgetEntity? budgetExist = await _budgetRepository.IsExist(budgetDto.MoneyId, budgetDto.CategoryName);

            if (budgetDto.CategoryName == "Otros") throw new CustomException(HttpStatusCode.NotAcceptable, "No se puede crear presupuesto para la categoria Otros");

            if (budgetExist != null)
            {
                throw new CustomException(HttpStatusCode.NotAcceptable, $"Ya existe un presupuesto con la categoria ${budgetDto.CategoryName} para este usuario");
            }

            MoneyEntity moneyUser = await _moneyRepository.GetById(budgetDto.MoneyId)
                        ?? throw new CustomException(HttpStatusCode.NotFound, "No existe una entidad para moneyId");

            if (moneyUser.Rest < budgetDto.Amount)
            {
                string message = "El monto es superior al disponible";
                throw new CustomException(HttpStatusCode.NotAcceptable, message);
            }


            BudgetEntity budget = _mapper.Map<BudgetEntity>(budgetDto);

            moneyUser.DecreaseRest(budgetDto.Amount);

            var response = await _budgetRepository.Create(budget);


            await _moneyRepository.Update(moneyUser);

            return _mapper.Map<BudgetGenericDto>(response);
        }

        public async Task<bool> DeleteById(int Id)
        {
            BudgetGenericDto budget = await GetById(Id)
                                        ?? throw new CustomException(HttpStatusCode.NotFound, "Prespuesto no encontrado");

            MoneyEntity money = await _moneyRepository.GetById(budget.MoneyId)
                            ?? throw new CustomException(HttpStatusCode.InternalServerError, $"En {nameof(DeleteById)} money es null, lo cual no deberia ocurrir");

            money.IncrementRest(budget.Amount);


            await _budgetRepository.DeleteById(Id);

            await _moneyRepository.Update(money);

            return true;
        }

        public async Task<List<BudgetEntity>> GetBudgetsByMoneyId(int Id)
        {
            return await _budgetRepository.GetAllUserBudgets(Id);
        }

        public async Task<BudgetGenericDto?> GetById(int Id)
        {
            BudgetEntity? response = await _budgetRepository.GetById(Id);

            return _mapper.Map<BudgetGenericDto>(response);
        }

        public async Task<bool> DecrementAmount(BudgetGenericDto budget, decimal amount)
        {
            var (moneyResponse, budgetResponse) = await GetMoneyBudget(budget);

            if (budgetResponse.Amount < amount) throw new CustomException(HttpStatusCode.NotAcceptable, "El prepuspuesto cuenta con menor monto del indicado a retirar");

            budgetResponse.DecrementAmount(amount);
            moneyResponse.IncrementRest(amount);

            await _moneyRepository.Update(moneyResponse);
            await _budgetRepository.Update(budgetResponse);

            return true;

        }

        public async Task<bool> IncrementAmount(BudgetGenericDto budget, decimal amount)
        {
            var (moneyResponse, budgetResponse) = await GetMoneyBudget(budget);

            if (moneyResponse.Rest < amount) throw new CustomException(HttpStatusCode.NotAcceptable, "El dinero disponible es menor al monto indicado a agregar");

            budgetResponse.IncrementAmount(amount);
            moneyResponse.DecreaseRest(amount);

            await _moneyRepository.Update(moneyResponse);
            await _budgetRepository.Update(budgetResponse);

            return true;
        }

        public Task<BudgetGenericDto> Update(BudgetGenericDto userDTO)
        {
            throw new NotImplementedException();
        }

        private async Task<(MoneyEntity, BudgetEntity)> GetMoneyBudget(BudgetGenericDto budget)
        {
            BudgetEntity? budgetResponse = await _budgetRepository.GetById(budget.Id);
            MoneyEntity? moneyResponse = await _moneyRepository.GetById(budget.MoneyId);

            if (budgetResponse == null || moneyResponse == null)
            {
                throw new CustomException(HttpStatusCode.NotFound, "entidad money o budget no encontrada");
            }

            return (moneyResponse, budgetResponse);
        }

        public async Task<BudgetGenericDto> GetBudgetWithExpenses(int Id)
        {
            return await _budgetRepository.GetBudgetWithExpenses(Id);
        }
    }
}
