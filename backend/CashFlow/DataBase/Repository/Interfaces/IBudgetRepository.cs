using CashFlow.DataBase.Entities;
using CashFlow.DTOs.Budget;

namespace CashFlow.DataBase.Repository.Interfaces
{
    public interface IBudgetRepository: IBaseRepository<Budget>
    {
        Task<Budget?> IsExist(int moneyId, string CategoryName);

        Task<List<Budget>> GetAllUserBudgets(int Id);
    }
}
