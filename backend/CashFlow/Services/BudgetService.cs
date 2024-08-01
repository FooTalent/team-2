using AutoMapper;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository.Interfaces;
using CashFlow.DTOs.Budget;
using CashFlow.Services.Interfaces;

namespace CashFlow.Services
{
    public class BudgetService(IBudgetRepository budgetRepository,IMapper mapper
        ) : IBudgetService
    {
        private readonly IBudgetRepository _budgetRepository = budgetRepository;
        private readonly IMapper _mapper = mapper;


        public async Task<BudgetGenericDto> Create(BudgetCreateDto budgetDto)
        {
            Budget budget = _mapper.Map<Budget>(budgetDto);

            var response = await _budgetRepository.Create(budget);

            return  _mapper.Map<BudgetGenericDto>(response);
        }

        public Task<bool> DeleteById(int Id)
        {
            throw new NotImplementedException();
        }

        public async Task<BudgetGenericDto?> GetById(int Id)
        {
            Budget? response = await _budgetRepository.GetById(Id);

            return _mapper.Map<BudgetGenericDto>(response);
        }

        public Task<BudgetGenericDto> Update(BudgetGenericDto userDTO)
        {
            throw new NotImplementedException();
        }
    }
}
