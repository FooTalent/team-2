using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository;
using CashFlow.Modules.Budget.Dtos;
using CashFlow.Modules.Money.Dtos;
using CashFlow.Modules.Movements.Dtos.Expense;
using CashFlow.Modules.Movements.Dtos.Income;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.Modules.Money
{
    public class MoneyRepository(AppDbContext appDbContext) : BaseRepository<MoneyEntity>(appDbContext)
    {


        public async Task<MoneyEntity?> GetByUserId(int Id)
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
                    Budgets = money.Budgets.Select(budget => new BudgetGenericDto
                    {
                        Amount = budget.Amount,
                        CategoryName = budget.CategoryName,
                        Id = budget.Id,
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
