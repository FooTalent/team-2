using CashFlow.DataBase.Entities;

namespace CashFlow.DTOs.Expense
{
    public class ExpenseCreateDto
    {
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }

        public int CaterogyId { get; set; }

        public int MoneyId { get; set; }
    }
}
