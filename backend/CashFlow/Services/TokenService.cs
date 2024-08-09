using CashFlow.DataBase.Entities;
using CashFlow.Services.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace CryptoTracker_backend.Services
{
    public class TokenService : ITokenService
    {
        private readonly IConfiguration _configuration;

        public TokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        public string CreateToken(UserEntity user)
        {
            List<Claim> claims =
            [
                new Claim(ClaimTypes.Name, user.Email),
                new Claim(ClaimTypes.Uri, $"{user.Id}"),
            ];

            var Key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value!));

            var cred = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: cred
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        public bool IsUserToken(int UserId, ClaimsPrincipal UserClaim)
        {
            var userIdToken = UserClaim.FindFirst(ClaimTypes.Uri)?.Value;

            return UserId != Convert.ToInt32(userIdToken);

        }
    }
}
