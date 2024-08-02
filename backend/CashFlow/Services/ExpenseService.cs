using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository;
using CashFlow.DTOs.Expense;
using CashFlow.Services.Interfaces;
using CashFlow.Utils;
using System.Net;

namespace CashFlow.Services
{
    public class ExpenseService(ExpenseRepository expenseRepository,MoneyRepository moneyRepository) : IExpensesService
    {
        private readonly ExpenseRepository _expenseRepository = expenseRepository;
        private readonly MoneyRepository _moneyRepository = moneyRepository;

        public async Task<ExpenseGenericDto> Create(ExpenseCreateDto expenseDTO)
        {
            Money? money = await _moneyRepository.GetById(expenseDTO.MoneyId)
                        ?? throw new CustomException(HttpStatusCode.NotFound, "Plata del usuario no encontrada para el campo MoneyId");

            if(money.Rest < expenseDTO.Amount)
            {
                throw new CustomException(HttpStatusCode.NotAcceptable, "Monto mayor al disponible en la cuenta");
            }

            money.Total -= expenseDTO.Amount;
            money.Rest -= expenseDTO.Amount;

            var response = await _expenseRepository.Create(expenseDTO);

            _moneyRepository.Update(money);

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
