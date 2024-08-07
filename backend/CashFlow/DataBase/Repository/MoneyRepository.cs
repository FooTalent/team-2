using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DTOs.Budget;
using CashFlow.DTOs.Expense;
using CashFlow.DTOs.Income;
using CashFlow.DTOs.TotalMoney;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.DataBase.Repository
{
    public class MoneyRepository(AppDbContext appDbContext) : BaseRepository<Money>(appDbContext)
    {


        public async Task<Money?> GetByUserId(int Id)
        {
            return await _context.Moneys.Where(money => money.UserId == Id).FirstOrDefaultAsync();
        }

        public async Task<MoneyGenericDto?> GetByRelations(int Id)
        {
            return await _context
                .Moneys
                .Where(money => money.Id == Id)
                .Select(money => new MoneyGenericDto
                {
                    Id = money.Id,
                    Total = money.Total,
                    Rest = money.Rest,
                    UserId = money.UserId,
                    Budgets = money.Budgets.Select(budget=> new BudgetGenericDto
                    {
                        Amount = budget.Amount,
                        CategoryName = budget.CategoryName,
                        Id  =budget.Id,
                        MoneyId = budget.MoneyId,
                        Name = budget.Name,
                        CreatedDate = budget.CreatedDate
                    }).ToList(),
                    Incomes = money.Incomes.Select(income => new IncomeGenericDto
                    {
                        Amount = income.Amount,
                        Date = income.Date,
                        Id = income.Id
                    }).ToList(),
                    Expenses = money.Expenses.Select(e => new ExpenseGenericDto
                    {
                        Amount = e.Amount,
                        Date = e.Date,
                        CategoryName = e.CategoryName,
                        Id = e.Id,
                        BudgetId = e.BudgetId,
                    }).ToList()

                }).FirstOrDefaultAsync();
        }
    }
}
