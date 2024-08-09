using CashFlow.DataBase.Entities;

namespace CashFlow.Modules.Movements.Dtos.Income
{
    public class IncomeGenericDto
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public int MoneyId { get; set; }
    }
}
