using CashFlow.Modules.Budget.Dtos;
using CashFlow.Modules.Budget.Interfaces;
using CashFlow.Utils;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace CashFlow.Modules.Budget
{
    [ApiController]
    [Route("presupuesto")]
    public class BudgetController(IBudgetService budgetService) : ControllerBase
    {
        private readonly IBudgetService _budgetService = budgetService;

        [HttpGet("presupuestos-del-usuario")]
        public async Task<IActionResult> GetBudgetsByMoneyId(int Id)
        {

            var budgetResponse = await _budgetService.GetBudgetsByMoneyId(Id);

            return budgetResponse == null ? new NotFoundResult() : new JsonResult(budgetResponse);
        }

        [HttpGet()]
        public async Task<IActionResult> GetBudgets(int id)
        {
            var budgetResponse = await _budgetService.GetBudgetWithExpenses(id);

            return new JsonResult(budgetResponse);
        }



        [HttpPost("create")]
        [Consumes("application/json")]
        public async Task<IActionResult> CreateBudget([FromBody] BudgetCreateDto budget)
        {
            var budgetResponse = await _budgetService.Create(budget);

            return new JsonResult(budgetResponse);
        }

        [HttpPut("agregar-retirar-monto")]
        [Consumes("application/json")]
        public async Task<IActionResult> AddRemoveAmount([FromBody] BudgetGenericDto budget, decimal Amount, bool Add = false, bool Remove = false)
        {

            if (Add && Remove || !Add && !Remove)
            {
                throw new CustomException(HttpStatusCode.NotAcceptable, "El valor Add o Remove, deben estar seteados uno en true y otro en false");
            };

            if (Add) await _budgetService.IncrementAmount(budget, Amount);
            if (Remove) await _budgetService.DecrementAmount(budget, Amount);

            return new OkResult();
        }

        [HttpDelete("delete")]
        public async Task<IActionResult> DeleteBudget(int Id)
        {
            var budgetResponse = await _budgetService.DeleteById(Id);

            return budgetResponse ? new OkResult() : new BadRequestResult();
        }

    }
}
