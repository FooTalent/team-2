using AutoMapper;
using CashFlow.DataBase.Entities;
using CashFlow.Modules.Money.Dtos;
using CashFlow.Modules.Money.Interfaces;

namespace CashFlow.Modules.Money
{
    public class MoneyService(MoneyRepository moneyRepository, IMapper mapper) : IMoneyService
    {
        private readonly IMapper _mapper = mapper;

        private readonly MoneyRepository _moneyRepository = moneyRepository;
        public async Task<MoneyGenericDto> Create(MoneyCreateDto moneyDto)
        {
            MoneyEntity money = _mapper.Map<MoneyEntity>(moneyDto);
            MoneyEntity moneyResponse = await _moneyRepository.Create(money);

            return _mapper.Map<MoneyGenericDto>(moneyResponse);
        }

        public Task<bool> DeleteById(int Id)
        {
            throw new NotImplementedException();
        }

        public async Task<MoneyGenericDto?> GetById(int Id)
        {
            MoneyEntity? money = await _moneyRepository.GetById(Id);

            return _mapper.Map<MoneyGenericDto>(money);
        }

        public async Task<MoneyGenericDto?> GetByIdRelations(int Id)
        {
            MoneyGenericDto? money = await _moneyRepository.GetByRelations(Id);

            return money;
        }

        public Task<MoneyGenericDto> Update(MoneyGenericDto moneyDto)
        {
            throw new NotImplementedException();
        }
    }
}
