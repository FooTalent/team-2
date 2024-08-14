using CashFlow.Services;
using Microsoft.AspNetCore.Mvc;
using CashFlow.Modules.Movements.Dtos.Expense;
using CashFlow.Modules.Movements.Dtos.Income;
using CashFlow.Modules.Movements.Interfaces;
using CashFlow.Modules.Money.Dtos;

namespace CashFlow.Modules.Movements
{
    [ApiController]
    [Route("movimientos")]
    public class MovementsController(IExpensesService expensesService, IIncomeService incomeService) : ControllerBase
    {

        private readonly IIncomeService _incomeService = incomeService;
        private readonly IExpensesService _expenseService = expensesService;

        [HttpPost("nuevo-gasto")]
        public async Task<ActionResult<ExpenseGenericDto>> AddExpense([FromBody] ExpenseCreateDto expenseCreateDto)
        {

            ExpenseGenericDto expenseResponse = await _expenseService.Create(expenseCreateDto);

            return new JsonResult(expenseResponse);
        }

        [HttpPost("nuevo-ingreso")]
        public async Task<ActionResult<MoneyGenericDto>> AddIncome([FromBody] IncomeCreateDto incomeCreateDto)
        {
            IncomeGenericDto incomeResponse = await _incomeService.Create(incomeCreateDto);

            return new JsonResult(incomeResponse);
        }

    }
}
