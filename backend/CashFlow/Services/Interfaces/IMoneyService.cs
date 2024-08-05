using CashFlow.DTOs.TotalMoney;

namespace CashFlow.Services.Interfaces
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
