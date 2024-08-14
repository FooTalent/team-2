using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository.Interfaces;
using CashFlow.Modules.Budget.Dtos;

namespace CashFlow.Modules.Budget.Interfaces
{
    public interface IBudgetRepository : IBaseRepository<BudgetEntity>
    {
        Task<BudgetEntity?> IsExist(int moneyId, string CategoryName);

        Task<List<BudgetEntity>> GetAllUserBudgets(int Id);

        Task<BudgetGenericDto> GetBudgetWithExpenses(int Id);
    }
}
