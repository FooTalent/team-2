using CashFlow.DTOs.Budget;
using CashFlow.DTOs.Expense;
using CashFlow.DTOs.Income;

namespace CashFlow.DTOs.TotalMoney
{
    public class MoneyGenericDto
    {
        public int Id { get; set; }

        public decimal Total { get; set; }

        public decimal Rest { get; set; }

        public int UserId { get; set; }

        public List<ExpenseGenericDto> Expenses { get; set; } = [];
        public List<IncomeGenericDto> Incomes { get; set; } = [];
        public List<BudgetGenericDto> Budgets  { get; set; } = [];

    }
}
