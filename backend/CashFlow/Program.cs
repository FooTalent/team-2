using CashFlow.DataBase.Context;
using CashFlow.DataBase.Repository;
using CashFlow.DataBase.Repository.Interfaces;
using CashFlow.Services;
using CashFlow.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options=> options.UseSqlServer("Server=PIREZ\\SQLEXPRESS;DataBase=CashFlow;Integrated Security=True;TrustServerCertificate=True"));

//Repositories
builder.Services.AddScoped<UserRepository>();
builder.Services.AddScoped<IBudgetRepository, BudgetRepository>();


// Services
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IBudgetService, BudgetService>();


//Mappers 
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
