using CashFlow.DataBase.Entities;
using CashFlow.DTOs.Budget;

namespace CashFlow.DataBase.Repository.Interfaces
{
    public interface IBudgetRepository: IBaseRepository<Budget>
    {

        public BudgetCreateDto cr(BudgetGenericDto budget);
    }
}
