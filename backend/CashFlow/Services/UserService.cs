using AutoMapper;
using CashFlow.DataBase.Entities;
using CashFlow.DataBase.Repository;
using CashFlow.DTOs.User;
using CashFlow.Services.Interfaces;
using CashFlow.Utils;
using System.Net;


namespace CashFlow.Services
{
    public class UserService(UserRepository userRepository,IMapper mapper,ITokenService tokenService):IUserService
    {
        private readonly UserRepository _userRepository = userRepository;
        private readonly IMapper _mapper = mapper;
        private readonly ITokenService _tokenService = tokenService;


        public async Task<UserGenericDto> Create(UserCreateDto userDTO)
        {
            userDTO.Password = BCrypt.Net.BCrypt.HashPassword(userDTO.Password);

            User user = _mapper.Map<User>(userDTO);
            User userResponse = await _userRepository.Create(user);

            return _mapper.Map<UserGenericDto>(userResponse);
        }

        public async Task<AuthResponseDto> Login(AuthRequestDto requestDTO)
        {
            User? userResponse = await _userRepository.GetByEmail(requestDTO.Email) 
                                        ?? throw new CustomException(HttpStatusCode.Unauthorized,
                                                                "Contrasena o email incorrectos");


            if (BCrypt.Net.BCrypt.Verify(requestDTO.Password, userResponse.Password))
            {
                var responseWithToken = new AuthResponseDto
                {
                    Token = _tokenService.CreateToken(userResponse),
                    User = _mapper.Map<UserGenericDto>(userResponse)
                };

                return responseWithToken;
            }
            else
            {
                throw new CustomException(HttpStatusCode.Unauthorized,
                                        "Contrasena o email incorrectos");
            }
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

        public async Task<List<User>> GetAll()
        {
            var response = await _userRepository.GetAll();

            return response.ToList();
        }

       
    }
}
