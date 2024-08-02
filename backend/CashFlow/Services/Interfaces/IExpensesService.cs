using CashFlow.DTOs.Budget;
using CashFlow.DTOs.Expense;

namespace CashFlow.Services.Interfaces
{
    public interface IExpensesService
    {
      Task<ExpenseGenericDto> Create(ExpenseCreateDto userDTO);

        Task<ExpenseGenericDto?> GetById(int Id);

        Task<bool> DeleteById(int Id);
    }
}
