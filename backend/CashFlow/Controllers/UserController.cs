using CashFlow.DTOs.User;
using CashFlow.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CashFlow.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController(IUserService userService):ControllerBase
    {
        private readonly IUserService _userService = userService;


        [HttpGet]
        public async Task<IActionResult> GetUser(int Id) {

            var userResponse = await _userService.GetById(Id);

            return userResponse == null ?  new NotFoundResult() : new JsonResult(userResponse);
        }

        [HttpPost("create")]
        [Consumes("application/json")]
        public async Task<IActionResult> CreateUser([FromBody] UserCreateDto user)
        {
            var userResponse = await _userService.Create(user);

            return  new JsonResult(userResponse);
        }



    }
}
