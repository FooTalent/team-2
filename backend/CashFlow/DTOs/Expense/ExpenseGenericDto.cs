namespace CashFlow.DTOs.Expense
{
    public class ExpenseGenericDto
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }

        public int CaterogyId { get; set; }

        public int MoneyId { get; set; }
    }
}
