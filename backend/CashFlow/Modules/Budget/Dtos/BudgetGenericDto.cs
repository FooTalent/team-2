using CashFlow.Modules.Movements.Dtos.Expense;
using System.ComponentModel.DataAnnotations;

namespace CashFlow.Modules.Budget.Dtos
{
    public class BudgetGenericDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public decimal Amount { get; set; }

        [Required]
        public int MoneyId { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        [Required]
        public string CategoryName { get; set; }

        public List<ExpenseWithoutRelationsDto> expenses { get; set; } = [];

    }
}
