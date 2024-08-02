using AutoMapper;
using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DTOs.Income;

namespace CashFlow.DataBase.Repository
{
    public class IncomeRepository: BaseRepositoryMapper<Income, IncomeCreateDto, IncomeGenericDto>
    {
        public IncomeRepository(AppDbContext context, IMapper mapper) : base(context, mapper)
        {
        }
    
    }
}
