using System.ComponentModel.DataAnnotations;

namespace CashFlow.DataBase.Entities
{
    public class Category
    {
        [Key]
        public string Name { get; set; }

        public List<Budget> budgets { get; set; } = new List<Budget>();
        public List<Expense> expenses { get; set; } = new List<Expense>();
    }
}
