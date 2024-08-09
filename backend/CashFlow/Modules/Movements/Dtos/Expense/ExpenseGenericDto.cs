namespace CashFlow.Modules.Movements.Dtos.Expense
{
    public class ExpenseGenericDto
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }

        public string CategoryName { get; set; }

        public int? BudgetId { get; set; }

        public int MoneyId { get; set; }
    }
}
