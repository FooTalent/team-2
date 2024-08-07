using CashFlow.Utils;
using System.Net;

namespace CashFlow.DataBase.Entities
{
    public class Budget
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Amount { get; set; }

        public int MoneyId { get; set; }

        public Money Money { get; set; }

        public DateTime CreatedDate { get; set; }

        public string CategoryName { get; set; }

        public Category Category { get; set; }

        public List<Expense> expenses { get; set; } = new List<Expense>();


        public void IncrementAmount(decimal amount)
        {
            Amount += amount;
        }

        public void DecrementAmount(decimal amount)
        {
            if (Amount - amount < 0) throw new CustomException(HttpStatusCode.NotAcceptable, "El dinero disponible no es suficiente");

            Amount -= amount;
        }
    }
}
