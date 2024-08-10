using CashFlow.Modules.Movements.Dtos.Income;

namespace CashFlow.Modules.Movements.Interfaces
{
    public interface IIncomeService
    {
        Task<IncomeGenericDto> Create(IncomeCreateDto userDTO);

        Task<IncomeGenericDto?> GetById(int Id);

        Task<bool> DeleteById(int Id);
    }
}
