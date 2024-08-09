using CashFlow.Utils;
using System.Net;
using System.Text.Json.Serialization;

namespace CashFlow.DataBase.Entities
{
    public class MoneyEntity
    {

        public int Id { get; set; }

        public decimal Total { get ; set; } 

        public decimal Rest { get ; set; }
        
        public int UserId { get; set; }
        
        public UserEntity User { get; set; }

        public List<BudgetEntity> Budgets { get; set; } = new List<BudgetEntity>();

        public List<ExpenseEntity> Expenses  { get; set; } = new List<ExpenseEntity>();

        public List<IncomeEntity> Incomes  { get; set; } = new List<IncomeEntity>();



        public void DecreaseTotal(decimal amount)
        {
            if (Total - amount < 0) throw new CustomException(HttpStatusCode.NotAcceptable, "El dinero disponible no es suficiente");
            Total -= amount;
        }

        public void DecreaseRest(decimal amount)
        {
            if (Rest - amount < 0) throw new CustomException(HttpStatusCode.NotAcceptable, "El dinero disponible no es suficiente"); ;
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
