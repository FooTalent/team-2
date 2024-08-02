using CashFlow.DataBase.Entities;

namespace CashFlow.DTOs.Income
{
    public class IncomeCreateDto
    {
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public int MoneyId { get; set; }
    }
}
