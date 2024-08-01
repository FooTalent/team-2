
using CashFlow.DTOs.Budget;

namespace CashFlow.Services.Interfaces
{
    public interface IBudgetService
    {
            Task<BudgetGenericDto> Create(BudgetCreateDto userDTO);

            Task<BudgetGenericDto?> GetById(int Id);

            Task<BudgetGenericDto> Update(BudgetGenericDto userDTO);

            Task<bool> DeleteById(int Id);
       
    }
}
