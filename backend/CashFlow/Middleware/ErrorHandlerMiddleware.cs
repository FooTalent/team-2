using CashFlow.Utils;
using System.Net;
using System.Text.Json;

namespace CashFlow.Middleware
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public ErrorHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var response = context.Response;
            response.ContentType = "application/json";

            try
            {
                await _next(context);
            }
            catch(CustomException error)
            {
                Console.WriteLine(error.Message, error);

                var result = JsonSerializer.Serialize(new
                {
                    error.StatusCode,
                    error.Title,
                    error.Message,
                });

                await response.WriteAsync(result);

            }
            catch (Exception error)
            {
                Console.WriteLine(error.Message, error);

                var result = JsonSerializer.Serialize(new
                {
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Title = "Server Error",
                     error.Message,
                     longMessage = error.ToString()
                });

                await response.WriteAsync(result);

            }

        }
    }
}
