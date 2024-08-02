using System.Net;

namespace CashFlow.Utils
{
    public class CustomException(HttpStatusCode code, string message) : Exception(message)
    {
        public int StatusCode = (int)code;
        public string Title = code.ToString();
    }
}
