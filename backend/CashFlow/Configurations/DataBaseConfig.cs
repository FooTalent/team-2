using CashFlow.DataBase.Context;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.Configurations
{
    public static class DataBaseConfig
    {

        public static void AddDataBaseConfig(this IServiceCollection Services,IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("PostgreSQLConnection");
            Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(connectionString));
        }
    }
}
