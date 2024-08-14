using CashFlow.DataBase.Entities;
using CashFlow.Modules.Budget.Interfaces;
using CashFlow.Modules.Money;
using CashFlow.Modules.Movements.Dtos.Expense;
using CashFlow.Modules.Movements.Interfaces;
using CashFlow.Utils;
using System.Net;

namespace CashFlow.Modules.Movements
{
    public class ExpenseService(ExpenseRepository expenseRepository, MoneyRepository moneyRepository, IBudgetRepository budgetRepository) : IExpensesService
    {
        private readonly ExpenseRepository _expenseRepository = expenseRepository;
        private readonly MoneyRepository _moneyRepository = moneyRepository;
        private readonly IBudgetRepository _budgetRepository = budgetRepository;

        public async Task<ExpenseGenericDto> Create(ExpenseCreateDto expenseDTO)
        {
            MoneyEntity? money = await _moneyRepository.GetById(expenseDTO.MoneyId)
                        ?? throw new CustomException(HttpStatusCode.NotFound, "Plata del usuario no encontrada para el campo MoneyId");

            BudgetEntity? budgetExist = await _budgetRepository.IsExist(expenseDTO.MoneyId, expenseDTO.CategoryName);

            if (budgetExist != null)
            {
                expenseDTO.BudgetId = budgetExist.Id;
                if (budgetExist.Amount < expenseDTO.Amount)
                {
                    decimal value = expenseDTO.Amount - budgetExist.Amount;
                    money.DecreaseRest(value);

                    budgetExist.Amount = 0;
                }
                else
                {
                    budgetExist.DecrementAmount(expenseDTO.Amount);
                }
            }
            else
            {
                money.DecreaseRest(expenseDTO.Amount);
            }

            money.DecreaseTotal(expenseDTO.Amount);

            var response = await _expenseRepository.Create(expenseDTO);

            await _moneyRepository.Update(money);

            if (budgetExist != null) await _budgetRepository.Update(budgetExist);


            return response;
        }

        public Task<bool> DeleteById(int Id)
        {
            throw new NotImplementedException();
        }

        public async Task<ExpenseGenericDto?> GetById(int Id)
        {
            return await _expenseRepository.GetByIdMapped(Id);
        }

    }
}
