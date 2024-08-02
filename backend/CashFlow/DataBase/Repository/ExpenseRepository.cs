using AutoMapper;
using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DTOs.Expense;

namespace CashFlow.DataBase.Repository
{
    public class ExpenseRepository : BaseRepositoryMapper<Expense, ExpenseCreateDto, ExpenseGenericDto>
    {
        public ExpenseRepository(AppDbContext context, IMapper mapper) : base(context, mapper)
        {
        }
    }
}
