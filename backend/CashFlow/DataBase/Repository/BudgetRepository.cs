using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository.Interfaces;
using CashFlow.DTOs.Budget;

namespace CashFlow.DataBase.Repository
{
    public class BudgetRepository(AppDbContext context) : BaseRepository<Budget>(context), IBudgetRepository
    {
        public BudgetCreateDto cr(BudgetGenericDto budget)
        {
            throw new NotImplementedException();
        }
    }
}
