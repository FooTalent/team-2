using System.Text.Json.Serialization;

namespace CashFlow.DataBase.Entities
{
    public class Expense
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string CategoryName { get; set; }

        public Category Category { get; set; }
        public int MoneyId { get; set; }

        [JsonIgnore]
        public Money Money { get; set; }

    }
}
