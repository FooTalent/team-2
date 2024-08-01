namespace CashFlow.DataBase.Entities
{
    public class Budget
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Amount { get; set; }

        public int TotalMoneyId { get; set; }

        public TotalMoney TotalMoney { get; set; }

        public DateTime CreatedDate { get; set; }
        public List<Expense> Expenses { get; set; } = new List<Expense>();

        public string CategoryName { get; set; }

        public Category Category { get; set; }

    }
}
