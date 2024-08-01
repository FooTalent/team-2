using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;

namespace CashFlow.DataBase.Repository
{
    public class MoneyRepository(AppDbContext appDbContext) : BaseRepository<Money>(appDbContext)
    {

    }
}
