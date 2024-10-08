﻿using CashFlow.DataBase.Entities;
using System.Security.Claims;

namespace CashFlow.Services.Interfaces
{
    public interface ITokenService
    {
        public string CreateToken(UserEntity userInfo);
        public bool IsUserToken(int numUser, ClaimsPrincipal UserClaim);
    }
}
