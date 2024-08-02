using CashFlow.DataBase.Entities;
using CashFlow.DTOs.User;

namespace CashFlow.Services.Interfaces
{
    public interface IUserService
    {

        Task<UserGenericDto> Create(UserCreateDto userDTO);

        Task<AuthResponseDto> Login(AuthRequestDto requestDTO);

        
        Task<UserGenericDto?> GetById(int Id);

        Task<List<User>> GetAll();

        Task<UserGenericDto> Update(UserGenericDto userDTO);

        Task<bool> DeleteById(int Id);
    }
}
