using CashFlow.DTOs.Budget;
using CashFlow.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CashFlow.Controllers
{
    [ApiController]
    [Route("presupuesto")]
    public class BudgetController(IBudgetService budgetService):ControllerBase
    {
        private readonly IBudgetService _budgetService= budgetService;

        [HttpGet("presupuestos-del-usuario")]
        public async Task<IActionResult> GetBudgetsByMoneyId(int Id)
        {

            var budgetResponse = await _budgetService.GetBudgetsByMoneyId(Id);

            return budgetResponse == null ? new NotFoundResult() : new JsonResult(budgetResponse);
        }

        [HttpGet]
        public async Task<IActionResult> GetBudget(int Id)
        {

            var budgetResponse = await _budgetService.GetById(Id);

            return budgetResponse == null ? new NotFoundResult() : new JsonResult(budgetResponse);
        }

        [HttpPost("create")]
        [Consumes("application/json")]
        public async Task<IActionResult> CreateBudget([FromBody] BudgetCreateDto budget)
        {
            var budgetResponse = await _budgetService.Create(budget);

            return new JsonResult(budgetResponse);
        }

        [HttpDelete("delete")]
        public async Task<IActionResult> DeleteBudget(int Id)
        {
            var budgetResponse = await _budgetService.DeleteById(Id);

            return budgetResponse ? new OkResult() : new BadRequestResult();
        }

    }
}
