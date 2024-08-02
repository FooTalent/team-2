using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.DataBase.Repository
{
    public class MoneyRepository(AppDbContext appDbContext) : BaseRepository<Money>(appDbContext)
    {


        public async Task<Money?> GetByUserId(int Id)
        {
            return await _context.Moneys.Where(money => money.UserId == Id).FirstOrDefaultAsync();
        }

        public async Task<Money?> GetByRelations(int Id)
        {
            return await _context.Moneys.Where(money => money.Id == Id).Include(x => x.Incomes).Include(a => a.Expenses).FirstOrDefaultAsync();
        }
    }
}
