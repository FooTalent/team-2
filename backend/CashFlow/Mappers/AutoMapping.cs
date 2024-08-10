using AutoMapper;
using CashFlow.DataBase.Entities;
using CashFlow.Modules.Budget.Dtos;
using CashFlow.Modules.Money.Dtos;
using CashFlow.Modules.Movements.Dtos.Expense;
using CashFlow.Modules.Movements.Dtos.Income;
using CashFlow.Modules.User.Dtos;

namespace CashFlow.Mappers
{
    public class AutoMapping : Profile
    {

        public AutoMapping()
        {

             CreateMap<UserCreateDto, UserEntity>().ReverseMap();
             CreateMap<UserGenericDto, UserEntity>().ReverseMap();


            CreateMap<BudgetCreateDto, BudgetEntity>().ReverseMap();
            CreateMap<BudgetGenericDto, BudgetEntity>().ReverseMap();

            CreateMap<MoneyCreateDto, MoneyEntity>().ReverseMap();
            CreateMap<MoneyGenericDto, MoneyEntity>().ReverseMap();

            CreateMap<ExpenseCreateDto, ExpenseEntity>().ReverseMap();
            CreateMap<ExpenseGenericDto, ExpenseEntity>().ReverseMap();

            CreateMap<IncomeGenericDto,IncomeEntity>().ReverseMap();
            CreateMap<IncomeCreateDto,IncomeEntity>().ReverseMap();


        }
    }
}
