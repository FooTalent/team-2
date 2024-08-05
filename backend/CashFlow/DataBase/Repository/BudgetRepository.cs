using AutoMapper;
using CashFlow.DataBase.Context;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository.Interfaces;
using CashFlow.DTOs.Budget;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.DataBase.Repository
{
    public class BudgetRepository(AppDbContext context,IMapper mapper) : BaseRepositoryMapper<Budget,BudgetCreateDto,BudgetGenericDto>(context,mapper), IBudgetRepository
    {
        public async Task<List<Budget>> GetAllUserBudgets(int Id)
        {
            return await  _context.Budgets.Where(k => k.MoneyId == Id).ToListAsync();
        }

        public async Task<Budget?> IsExist(int moneyId, string CategoryName)
        {

            Budget? budget = await _context.Budgets.Where(b => b.MoneyId == moneyId && b.CategoryName == CategoryName).FirstOrDefaultAsync();

            return budget;
        }

       

    }
}
