﻿using CashFlow.DataBase.Entities;
using CashFlow.Modules.Budget.Dtos;

namespace CashFlow.Modules.Budget.Interfaces
{
    public interface IBudgetService
    {
        Task<BudgetGenericDto> Create(BudgetCreateDto userDTO);

        Task<BudgetGenericDto?> GetById(int Id);

        Task<BudgetGenericDto> Update(BudgetGenericDto userDTO);

        Task<bool> DeleteById(int Id);

        Task<List<BudgetEntity>> GetBudgetsByMoneyId(int Id);

        Task<BudgetGenericDto> GetBudgetWithExpenses(int Id);

        Task<bool> IncrementAmount(BudgetGenericDto budget, decimal amount);
        Task<bool> DecrementAmount(BudgetGenericDto budget, decimal amount);

    }
}
