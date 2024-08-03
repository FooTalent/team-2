using CashFlow.DataBase.Context;
using CashFlow.DataBase.Repository;
using CashFlow.DataBase.Repository.Interfaces;
using CashFlow.Middleware;
using CashFlow.Services;
using CashFlow.Services.Interfaces;
using CryptoTracker_backend.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options=> options.UseNpgsql("Host=<host>;Database=<dataname>;Username=<user>;Password=<password>;sslmode=Require"));;

//Repositories
builder.Services.AddScoped<UserRepository>();
builder.Services.AddScoped<MoneyRepository>();
builder.Services.AddScoped<ExpenseRepository>();
builder.Services.AddScoped<IncomeRepository>();
builder.Services.AddScoped<IBudgetRepository, BudgetRepository>();


// Services
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IBudgetService, BudgetService>();
builder.Services.AddScoped<IMoneyService, MoneyService>();
builder.Services.AddScoped<IExpensesService,ExpenseService>();
builder.Services.AddScoped<IIncomeService,IncomeService>();


//Mappers 
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


// Cors
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CashFlow", policy =>
    {
        policy.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

// JWT token
builder.Services.AddScoped<ITokenService, TokenService>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(builder.Configuration.GetSection("AppSettings:Token").Value!)),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });
    options.OperationFilter<SecurityRequirementsOperationFilter>();
});


var app = builder.Build();

// Configure the HTTP request pipeline.

    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = "swagger";
    });

app.UseCors("CashFlow");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseMiddleware<ErrorHandlerMiddleware>();

app.Run();
