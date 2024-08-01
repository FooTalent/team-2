using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;

namespace CashFlow.DataBase.Repository
{
    public class UserRepository(AppDbContext context) : BaseRepository<User>(context)
    {
    }
}
