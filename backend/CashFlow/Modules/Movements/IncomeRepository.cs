using AutoMapper;
using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository;
using CashFlow.Modules.Movements.Dtos.Income;

namespace CashFlow.Modules.Movements
{
    public class IncomeRepository : BaseRepositoryMapper<IncomeEntity, IncomeCreateDto, IncomeGenericDto>
    {
        public IncomeRepository(AppDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

    }
}
