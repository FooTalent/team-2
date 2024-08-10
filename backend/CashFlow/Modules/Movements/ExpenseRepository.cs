using AutoMapper;
using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository;
using CashFlow.Modules.Movements.Dtos.Expense;

namespace CashFlow.Modules.Movements
{
    public class ExpenseRepository : BaseRepositoryMapper<ExpenseEntity, ExpenseCreateDto, ExpenseGenericDto>
    {
        public ExpenseRepository(AppDbContext context, IMapper mapper) : base(context, mapper)
        {
        }
    }
}
