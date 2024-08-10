using System.Text.Json.Serialization;

namespace CashFlow.DataBase.Entities
{
    public class ExpenseEntity
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string CategoryName { get; set; }

        public CategoryEntiy Category { get; set; }
        public int MoneyId { get; set; }

        [JsonIgnore]
        public MoneyEntity Money { get; set; }

        public int? BudgetId { get; set; }

        [JsonIgnore]
        public BudgetEntity? Budget { get; set; }

    }
}
