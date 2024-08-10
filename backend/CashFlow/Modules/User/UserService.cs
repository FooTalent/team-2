using AutoMapper;
using CashFlow.DataBase.Entities;
using CashFlow.Modules.Money;
using CashFlow.Modules.User.Dtos;
using CashFlow.Modules.User.Interfaces;
using CashFlow.Services.Interfaces;
using CashFlow.Utils;
using System.Net;


namespace CashFlow.Modules.User
{
    public class UserService(UserRepository userRepository, MoneyRepository moneyRepository, IMapper mapper, ITokenService tokenService) : IUserService
    {
        private readonly UserRepository _userRepository = userRepository;
        private readonly IMapper _mapper = mapper;
        private readonly ITokenService _tokenService = tokenService;
        private readonly MoneyRepository _moneyRepository = moneyRepository;


        public async Task<UserGenericDto> Create(UserCreateDto userDTO)
        {
            userDTO.Password = BCrypt.Net.BCrypt.HashPassword(userDTO.Password);


            UserEntity user = _mapper.Map<UserEntity>(userDTO);
            UserEntity userResponse = await _userRepository.Create(user);

            MoneyEntity money = new()
            {
                Rest = 0,
                Total = 0,
                UserId = userResponse.Id
            };

            await _moneyRepository.Create(money);

            return _mapper.Map<UserGenericDto>(userResponse);
        }

        public async Task<AuthResponseDto> Login(AuthRequestDto requestDTO)
        {
            UserEntity? userResponse = await _userRepository.GetByEmail(requestDTO.Email)
                                        ?? throw new CustomException(HttpStatusCode.Unauthorized,
                                                                "Contrasena o email incorrectos");

            var moneyCreated = await _moneyRepository.GetByUserId(userResponse.Id);

            if (BCrypt.Net.BCrypt.Verify(requestDTO.Password, userResponse.Password))
            {
                var responseWithToken = new AuthResponseDto
                {
                    Token = _tokenService.CreateToken(userResponse),
                    User = _mapper.Map<UserGenericDto>(userResponse),
                    MoneyId = moneyCreated?.Id
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
            UserEntity? userResponse = await _userRepository.GetById(Id);

            return userResponse == null ? null : _mapper.Map<UserGenericDto>(userResponse);
        }

        public Task<UserGenericDto> Update(UserGenericDto userDTO)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteById(int Id)
        {
            await _userRepository.DeleteById(Id);

            return true;
        }


        public async Task<List<UserEntity>> GetAll()
        {
            var response = await _userRepository.GetAll();

            return response.ToList();
        }


    }
}
