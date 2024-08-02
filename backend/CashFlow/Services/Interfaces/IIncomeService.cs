using CashFlow.DTOs.Income;

namespace CashFlow.Services.Interfaces
{
    public interface IIncomeService
    {
        Task<IncomeGenericDto> Create(IncomeCreateDto userDTO);

        Task<IncomeGenericDto?> GetById(int Id);

        Task<bool> DeleteById(int Id);
    }
}
