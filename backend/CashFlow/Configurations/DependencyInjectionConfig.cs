using CashFlow.Modules.Budget.Interfaces;
using CashFlow.Modules.Budget;
using CashFlow.Modules.Money.Interfaces;
using CashFlow.Modules.Money;
using CashFlow.Modules.Movements.Interfaces;
using CashFlow.Modules.Movements;
using CashFlow.Modules.User.Interfaces;
using CashFlow.Modules.User;

namespace CashFlow.Configurations
{
    public static class DependencyInjectionConfig
    {

        public static void AddDependencyInjection(this IServiceCollection Services)
        {

            //Repositories
            Services.AddScoped<UserRepository>();
            Services.AddScoped<MoneyRepository>();
            Services.AddScoped<ExpenseRepository>();
            Services.AddScoped<IncomeRepository>();
            Services.AddScoped<IBudgetRepository, BudgetRepository>();


            // Services
            Services.AddScoped<IUserService, UserService>();
            Services.AddScoped<IBudgetService, BudgetService>();
            Services.AddScoped<IMoneyService, MoneyService>();
            Services.AddScoped<IExpensesService, ExpenseService>();
            Services.AddScoped<IIncomeService, IncomeService>();

            //Mappers 
            Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

        }
    }
}
