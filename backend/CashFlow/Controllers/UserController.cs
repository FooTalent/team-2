using CashFlow.DTOs.User;
using CashFlow.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CashFlow.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController(IUserService userService):ControllerBase
    {
        private readonly IUserService _userService = userService;

        [HttpGet("all")]
        public async Task<IActionResult> GetAllUsers()
        {

            var userResponse = await _userService.GetAll();

            return userResponse == null ? new NotFoundResult() : new JsonResult(userResponse);
        }

        [HttpGet]
        [Authorize]
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

        [HttpPost("login")]
        [Consumes("application/json")]
        public async Task<IActionResult> LoginUser([FromBody] AuthRequestDto userAuth)
        {
            var userResponse = await _userService.Login(userAuth);

            return new JsonResult(userResponse);
        }


        [HttpDelete("delete")]
        public async Task<IActionResult> DeleteUser(int Id)
        {
            var response = await _userService.DeleteById(Id);


            return response ? new OkResult(): new BadRequestResult();
        }



    }
}
