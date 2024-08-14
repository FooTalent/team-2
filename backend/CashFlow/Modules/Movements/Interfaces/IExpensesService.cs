using CashFlow.Modules.Movements.Dtos.Expense;

namespace CashFlow.Modules.Movements.Interfaces
{
    public interface IExpensesService
    {
        Task<ExpenseGenericDto> Create(ExpenseCreateDto userDTO);

        Task<ExpenseGenericDto?> GetById(int Id);

        Task<bool> DeleteById(int Id);
    }
}
