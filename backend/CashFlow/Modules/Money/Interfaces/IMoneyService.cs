using CashFlow.Modules.Money.Dtos;

namespace CashFlow.Modules.Money.Interfaces
{
    public interface IMoneyService
    {
        Task<MoneyGenericDto> Create(MoneyCreateDto moneyDto);

        Task<MoneyGenericDto?> GetById(int Id);

        Task<MoneyGenericDto?> GetByIdRelations(int Id);

        Task<MoneyGenericDto> Update(MoneyGenericDto moneyDto);

        Task<bool> DeleteById(int Id);
    }
}
