using CashFlow.DataBase.Entities;
using CashFlow.Modules.Money;
using CashFlow.Modules.Movements.Dtos.Income;
using CashFlow.Modules.Movements.Interfaces;
using CashFlow.Utils;
using System.Net;

namespace CashFlow.Modules.Movements
{
    public class IncomeService(IncomeRepository incomeRepository, MoneyRepository moneyRepository) : IIncomeService
    {
        private readonly IncomeRepository _incomeRepository = incomeRepository;
        private readonly MoneyRepository _moneyRepository = moneyRepository;


        public async Task<IncomeGenericDto> Create(IncomeCreateDto incomeDTO)
        {
            MoneyEntity? money = await _moneyRepository.GetById(incomeDTO.MoneyId)
                            ?? throw new CustomException(HttpStatusCode.NotFound, "Plata del usuario no encontrada para el campo MoneyId");

            money.IncrementTotal(incomeDTO.Amount);
            money.IncrementRest(incomeDTO.Amount);

            var response = await _incomeRepository.Create(incomeDTO);

            await _moneyRepository.Update(money);

            return response;
        }

        public Task<bool> DeleteById(int Id)
        {
            throw new NotImplementedException();

        }

        public async Task<IncomeGenericDto?> GetById(int Id)
        {
            return await _incomeRepository.GetByIdMapped(Id);
        }
    }
}
