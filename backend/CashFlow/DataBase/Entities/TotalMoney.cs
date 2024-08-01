namespace CashFlow.DataBase.Entities
{
    public class TotalMoney
    {

        public int Id { get; set; }

        public decimal  Total { get; set; }

        public decimal Rest { get; set; }

        public int UserId { get; set; }
        
        public User User { get; set; }

        public List<Budget> Budgets { get; set; } = new List<Budget>();
    }
}
