using CashFlow.DataBase.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.Controllers
{
    [ApiController]
    [Route("Categorias")]
    public class CategoryController(AppDbContext context) : ControllerBase
    {

        private readonly AppDbContext _context = context;

        [HttpGet]
        public async Task<ActionResult<List<string>>> GetAllCategories()
        {
            return await _context.Caterogies.Select(a=> a.Name).ToListAsync();
        }
    }
}
