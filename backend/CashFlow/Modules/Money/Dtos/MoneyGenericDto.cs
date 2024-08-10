using CashFlow.Modules.Budget.Dtos;
using CashFlow.Modules.Movements.Dtos.Expense;
using CashFlow.Modules.Movements.Dtos.Income;

namespace CashFlow.Modules.Money.Dtos
{
    public class MoneyGenericDto
    {
        public int Id { get; set; }

        public decimal Total { get; set; }

        public decimal Rest { get; set; }

        public int UserId { get; set; }

        public List<ExpenseGenericDto> Expenses { get; set; } = [];
        public List<IncomeGenericDto> Incomes { get; set; } = [];
        public List<BudgetGenericDto> Budgets { get; set; } = [];

    }
}
