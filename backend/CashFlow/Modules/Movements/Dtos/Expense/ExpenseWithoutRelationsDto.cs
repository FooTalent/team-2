namespace CashFlow.Modules.Movements.Dtos.Expense
{
    public class ExpenseWithoutRelationsDto
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }

        public string CategoryName { get; set; }

    }
}
