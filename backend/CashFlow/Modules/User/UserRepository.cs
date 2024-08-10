using CashFlow.DataBase.Context;
using CashFlow.DataBase.Repository;
using Microsoft.EntityFrameworkCore;
using CashFlow.DataBase.Entities;

namespace CashFlow.Modules.User
{
    public class UserRepository(AppDbContext context) : BaseRepository<UserEntity>(context)
    {

        public async Task<UserEntity?> GetByEmail(string email)
        {
            return await _context.Users.Where(user => user.Email == email).FirstOrDefaultAsync();
        }


    }
}
