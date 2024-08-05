using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository;
using CashFlow.DataBase.Repository.Interfaces;
using CashFlow.DTOs.Expense;
using CashFlow.Services.Interfaces;
using CashFlow.Utils;
using System.Net;

namespace CashFlow.Services
{
    public class ExpenseService(ExpenseRepository expenseRepository,MoneyRepository moneyRepository,IBudgetRepository budgetRepository) : IExpensesService
    {
        private readonly ExpenseRepository _expenseRepository = expenseRepository;
        private readonly MoneyRepository _moneyRepository = moneyRepository;
        private readonly IBudgetRepository _budgetRepository = budgetRepository;

        public async Task<ExpenseGenericDto> Create(ExpenseCreateDto expenseDTO)
        {
            Money? money = await _moneyRepository.GetById(expenseDTO.MoneyId)
                        ?? throw new CustomException(HttpStatusCode.NotFound, "Plata del usuario no encontrada para el campo MoneyId");

            Budget? budgetExist = await _budgetRepository.IsExist(expenseDTO.MoneyId, expenseDTO.CategoryName);

            if(budgetExist != null)
            {
             /*   if(budgetExist.Amount + money.Rest < expenseDTO.Amount)
                {
                    throw new CustomException(HttpStatusCode.NotAcceptable, "Monto mayor al disponible en la cuenta");
                }*/

                if(budgetExist.Amount < expenseDTO.Amount)
                {
                    decimal value = expenseDTO.Amount - budgetExist.Amount;
                    money.DecreaseRest(value);

                    budgetExist.Amount = 0;
                }
                else
                {
                    budgetExist.Amount -=  budgetExist.Amount - expenseDTO.Amount;
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
