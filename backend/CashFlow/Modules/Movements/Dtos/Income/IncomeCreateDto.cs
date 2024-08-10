using System.ComponentModel.DataAnnotations;

namespace CashFlow.Modules.Movements.Dtos.Income
{
    public class IncomeCreateDto
    {
        [Required, Range(1, 2000000)]
        public decimal Amount { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public int MoneyId { get; set; }
    }
}
