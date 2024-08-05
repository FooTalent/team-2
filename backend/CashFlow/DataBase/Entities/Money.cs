using CashFlow.Utils;
using System.Net;
using System.Text.Json.Serialization;

namespace CashFlow.DataBase.Entities
{
    public class Money
    {

        public int Id { get; set; }

        public decimal Total { get ; set; } 

        public decimal Rest { get ; set; }
        
        public int UserId { get; set; }
        
        public User User { get; set; }

        public List<Budget> Budgets { get; set; } = new List<Budget>();

        public List<Expense> Expenses  { get; set; } = new List<Expense>();

        public List<Income> Incomes  { get; set; } = new List<Income>();



        public void DecreaseTotal(decimal amount)
        {
            if (Total - amount < 0) throw new CustomException(HttpStatusCode.NotAcceptable, "El dinero disponible en el Total no es suficiente");
            Total -= amount;
        }

        public void DecreaseRest(decimal amount)
        {
            if (Rest - amount < 0) throw new CustomException(HttpStatusCode.NotAcceptable, "El dinero disponible en el resto no es suficiente"); ;
            Rest -= amount;
        }

        public void IncrementTotal(decimal amount)
        {
            Total += amount;
        }

        public void IncrementRest(decimal amount)
        {
            Rest += amount;
        }
    }
}
