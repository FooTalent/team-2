using CashFlow.DTOs.User;

namespace CashFlow.Services.Interfaces
{
    public interface IUserService
    {

        Task<UserGenericDto> Create(UserCreateDto userDTO);

        Task<UserGenericDto?> GetById(int Id);

        Task<UserGenericDto> Update(UserGenericDto userDTO);

        Task<bool> DeleteById(int Id);
    }
}
