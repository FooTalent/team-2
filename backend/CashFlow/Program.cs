using CashFlow.Configurations;
using CashFlow.Middleware;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Custom configurations
builder.Services.AddCorsPolicy();
builder.Services.AddSwagger();
builder.Services.AddDataBaseConfig(builder.Configuration);
builder.Services.AddJwtAuthentication(builder.Configuration);
builder.Services.AddDependencyInjection();


var app = builder.Build();

app.UseCors("CorsPolicy");

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    c.RoutePrefix = "swagger";
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseMiddleware<ErrorHandlerMiddleware>();

app.Run();
