namespace CashFlow.Modules.User.Dtos
{
    public class AuthResponseDto
    {
        public string Token { get; set; } = string.Empty;

        public UserGenericDto User { get; set; }

        public int? MoneyId { get; set; }
    }
}
