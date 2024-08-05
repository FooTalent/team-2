using AutoMapper;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository.Interfaces;
using CashFlow.DTOs.Budget;
using CashFlow.Services.Interfaces;
using System.Net;
using CashFlow.Utils;
using CashFlow.DataBase.Repository;

namespace CashFlow.Services
{
    public class BudgetService(IBudgetRepository budgetRepository, MoneyRepository moneyRepository, IMapper mapper
        ) : IBudgetService
    {
        private readonly IBudgetRepository _budgetRepository = budgetRepository;
        private readonly IMapper _mapper = mapper;
        private readonly MoneyRepository _moneyRepository = moneyRepository;


        public async Task<BudgetGenericDto> Create(BudgetCreateDto budgetDto)
        {
            Budget? budgetExist = await _budgetRepository.IsExist(budgetDto.MoneyId,budgetDto.CategoryName);

            if (budgetExist != null)
            {
                throw new CustomException(HttpStatusCode.NotAcceptable, $"Ya existe un presupuesto con la categoria ${budgetDto.CategoryName} para este usuario");
            }

            Money moneyUser = await _moneyRepository.GetById(budgetDto.MoneyId) 
                        ?? throw new CustomException(HttpStatusCode.NotFound, "No existe una entidad para moneyId");

            if ( moneyUser.Rest < budgetDto.Amount )
            {
                string message = moneyUser == null ? "No existe una entidad para moneyId" : "El monto es superior al disponible";
                throw new CustomException(HttpStatusCode.NotAcceptable, message);
            }


            Budget budget = _mapper.Map<Budget>(budgetDto);

            var response = await _budgetRepository.Create(budget);

            moneyUser.Rest -= budgetDto.Amount;


            await _moneyRepository.Update(moneyUser);

            return  _mapper.Map<BudgetGenericDto>(response);
        }



        public async Task<bool> DeleteById(int Id)
        {
              await _budgetRepository.DeleteById(Id);

            return true;
        }

        public async Task<List<Budget>> GetBudgetsByMoneyId(int Id)
        {
           return  await _budgetRepository.GetAllUserBudgets(Id);
        }

        public async Task<BudgetGenericDto?> GetById(int Id)
        {
            Budget? response = await _budgetRepository.GetById(Id);

            return _mapper.Map<BudgetGenericDto>(response);
        }

        public Task<BudgetGenericDto> Update(BudgetGenericDto userDTO)
        {
            throw new NotImplementedException();
        }
    }
}
