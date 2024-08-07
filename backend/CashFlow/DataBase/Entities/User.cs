using Microsoft.EntityFrameworkCore;

namespace CashFlow.DataBase.Entities
{
    public class User
    {

        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public Money TotalMoney { get; set; }

    }
}
