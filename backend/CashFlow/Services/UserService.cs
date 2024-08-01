using AutoMapper;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository;
using CashFlow.DTOs.User;
using CashFlow.Services.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace CashFlow.Services
{
    public class UserService(UserRepository userRepository,IMapper mapper):IUserService
    {
        private readonly UserRepository _userRepository = userRepository;
        private readonly IMapper _mapper = mapper;


        public async Task<UserGenericDto> Create(UserCreateDto userDTO)
        {
            User user = _mapper.Map<User>(userDTO);
            User userResponse = await _userRepository.Create(user);

            return _mapper.Map<UserGenericDto>(userResponse);
        }

        public async Task<UserGenericDto?> GetById(int Id)
        {
            User? userResponse= await _userRepository.GetById(Id);

            return userResponse == null ? null: _mapper.Map<UserGenericDto>(userResponse);
        }

        public Task<UserGenericDto> Update(UserGenericDto userDTO)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteById(int Id)
        {
            throw new NotImplementedException();
        }

        

    }
}
