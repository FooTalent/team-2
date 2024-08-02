using CashFlow.DataBase.Entities;
using CashFlow.DTOs.TotalMoney;
using CashFlow.DTOs.User;

namespace CashFlow.Services.Interfaces
{
    public interface IMoneyService
    {

        Task<MoneyGenericDto> Create(MoneyCreateDto moneyDto);

        Task<MoneyGenericDto?> GetById(int Id);

        Task<Money?> GetByIdRelations(int Id);

        Task<MoneyGenericDto> Update(MoneyGenericDto moneyDto);

        Task<bool> DeleteById(int Id);
    }
}
