using CashFlow.Modules.Money.Dtos;
using CashFlow.Modules.Money.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CashFlow.Modules.Money
{
    [ApiController]
    [Route("dinero")]
    public class MoneyController(IMoneyService moneyService) : ControllerBase
    {

        private readonly IMoneyService _moneyService = moneyService;

        [HttpGet]
        public async Task<ActionResult<MoneyGenericDto>> GetMoneyById(int Id)
        {
            var moneyResponse = await _moneyService.GetByIdRelations(Id);

            if (moneyResponse == null)
            {
                return new NotFoundResult();
            }

            return new JsonResult(moneyResponse);
        }


    }
}
