namespace CashFlow.DTOs.User
{
    public class AuthResponseDto
    {
        public string Token { get; set; } = string.Empty;

        public UserGenericDto User { get; set; }
    }
}
