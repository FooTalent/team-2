using CashFlow.DataBase.Entities;
using CashFlow.Modules.User.Dtos;

namespace CashFlow.Modules.User.Interfaces
{
    public interface IUserService
    {

        Task<UserGenericDto> Create(UserCreateDto userDTO);

        Task<AuthResponseDto> Login(AuthRequestDto requestDTO);


        Task<UserGenericDto?> GetById(int Id);

        Task<List<UserEntity>> GetAll();

        Task<UserGenericDto> Update(UserGenericDto userDTO);

        Task<bool> DeleteById(int Id);
    }
}
