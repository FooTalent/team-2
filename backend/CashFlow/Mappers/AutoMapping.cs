using AutoMapper;
using CashFlow.DataBase.Entities;
using CashFlow.DTOs.Budget;
using CashFlow.DTOs.TotalMoney;
using CashFlow.DTOs.User;

namespace CashFlow.Mappers
{
    public class AutoMapping : Profile
    {

        public AutoMapping()
        {

            /*CreateMap<BenefitCreateDTO, Benefits>().ReverseMap();
            CreateMap<OdontogramCreateDTO, Odontogram>().ReverseMap();*/

             CreateMap<UserCreateDto, User>().ReverseMap();
             CreateMap<UserGenericDto, User>().ReverseMap();


            CreateMap<BudgetCreateDto, Budget>().ReverseMap();
            CreateMap<BudgetGenericDto, Budget>().ReverseMap();

            CreateMap<MoneyCreateDto, Money>().ReverseMap();
            CreateMap<MoneyGenericDto, Money>().ReverseMap();

        }
    }
}
