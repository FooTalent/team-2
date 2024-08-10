using AutoMapper;
using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository;
using CashFlow.Modules.Budget.Dtos;
using CashFlow.Modules.Budget.Interfaces;
using CashFlow.Modules.Movements.Dtos.Expense;
using CashFlow.Utils;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace CashFlow.Modules.Budget
{
    public class BudgetRepository(AppDbContext context, IMapper mapper) : BaseRepositoryMapper<BudgetEntity, BudgetCreateDto, BudgetGenericDto>(context, mapper), IBudgetRepository
    {
        public async Task<List<BudgetEntity>> GetAllUserBudgets(int Id)
        {
            return await _context.Budgets.Where(k => k.MoneyId == Id).ToListAsync();
        }

        public async Task<BudgetEntity?> IsExist(int moneyId, string CategoryName)
        {

            BudgetEntity? budget = await _context.Budgets.Where(b => b.MoneyId == moneyId && b.CategoryName == CategoryName).FirstOrDefaultAsync();

            return budget;
        }

        public async Task<BudgetGenericDto> GetBudgetWithExpenses(int Id)
        {
            var r = await _context.Budgets.Where(x => x.Id == Id).Select(bud => new BudgetGenericDto
            {
                Id = bud.Id,
                MoneyId = bud.MoneyId,
                Amount = bud.Amount,
                CategoryName = bud.CategoryName,
                Name = bud.Name,
                expenses = bud.expenses.Select(exp => new ExpenseWithoutRelationsDto
                {
                    CategoryName = exp.CategoryName,
                    Amount = exp.Amount,
                    Date = exp.Date,
                    Id = exp.Id,
                }).ToList()

            }).FirstOrDefaultAsync() ?? throw new CustomException(HttpStatusCode.NotFound, "Prespuesto no encontrado");

            return r;
        }

    }
}
