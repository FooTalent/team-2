namespace CashFlow.DTOs.Budget
{
    public class BudgetGenericDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Amount { get; set; }

        public int TotalMoneyId { get; set; }

        public DateTime CreatedDate { get; set; }

        public string CategoryName { get; set; }

    }
}
