using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DTOs.User;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.DataBase.Repository
{
    public class UserRepository(AppDbContext context) : BaseRepository<User>(context)
    {

        public async Task<User?> GetByEmail(string email)
        {
            return await _context.Users.Where(user => user.Email == email).FirstOrDefaultAsync();
        }


    }
}
