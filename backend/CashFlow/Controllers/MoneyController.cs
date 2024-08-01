using CashFlow.DTOs.TotalMoney;
using CashFlow.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CashFlow.Controllers
{
    [ApiController]
    [Route("dinero")]
    public class MoneyController(IMoneyService moneyService):ControllerBase
    {

        private readonly IMoneyService _moneyService = moneyService;

        [HttpGet]
        public async Task<ActionResult<MoneyGenericDto>> GetMoneyById(int Id)
        {
            var moneyResponse = await _moneyService.GetById(Id);

            if(moneyResponse == null)
            {
                return new NotFoundResult();
            }

            return new JsonResult(moneyResponse);
        }


        [HttpPost("create")]
        [Consumes("application/json")]
        public async Task<ActionResult<MoneyGenericDto>> Create([FromBody] MoneyCreateDto moneyDto)
        {
            var moneyResponse = await _moneyService.Create(moneyDto);

            return new JsonResult(moneyResponse);
        }

    }
}
