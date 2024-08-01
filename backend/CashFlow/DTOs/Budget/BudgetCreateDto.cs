
namespace CashFlow.DTOs.Budget
{
    public class BudgetCreateDto
    {
        public string Name { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public int MoneyId { get; set; }
        public DateTime CreatedDate { get; set; }

        public string CategoryName { get; set; }

    }
}
