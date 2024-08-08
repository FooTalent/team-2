
using System.ComponentModel.DataAnnotations;

namespace CashFlow.DTOs.Expense
{
    public class ExpenseCreateDto
    {
        [Required, Range(1, 2000000)]
        public decimal Amount { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string CategoryName { get; set; }

        public int? BudgetId { get; set; }

        [Required]
        public int MoneyId { get; set; }
    }
}
