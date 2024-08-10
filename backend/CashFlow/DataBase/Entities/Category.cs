using System.ComponentModel.DataAnnotations;

namespace CashFlow.DataBase.Entities
{
    public class CategoryEntiy
    {
        [Key]
        public string Name { get; set; }

        public List<BudgetEntity> budgets { get; set; } = new List<BudgetEntity>();
        public List<ExpenseEntity> expenses { get; set; } = new List<ExpenseEntity>();
    }
}
