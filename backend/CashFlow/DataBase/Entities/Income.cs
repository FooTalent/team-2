using System.Text.Json.Serialization;

namespace CashFlow.DataBase.Entities
{
    public class Income
    {
        public int Id { get; set; }

        public decimal Amount { get; set; }

        public DateTime Date { get; set; }

        public string Origin { get; set; } = string.Empty;

        public int MoneyId { get; set; }

        [JsonIgnore]
        public Money Money { get; set; }
    }
}
