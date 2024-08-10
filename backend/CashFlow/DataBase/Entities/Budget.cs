using CashFlow.Utils;
using System.Net;

namespace CashFlow.DataBase.Entities
{
    public class BudgetEntity
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Amount { get; set; }

        public int MoneyId { get; set; }

        public MoneyEntity Money { get; set; }

        public DateTime CreatedDate { get; set; }

        public string CategoryName { get; set; }

        public CategoryEntiy Category { get; set; }

        public List<ExpenseEntity> expenses { get; set; } = new List<ExpenseEntity>();


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
