namespace CashFlow.Modules.Money.Dtos
{
    public class MoneyCreateDto
    {
        public decimal Total { get; set; }

        public decimal Rest { get; set; }

        public int UserId { get; set; }
    }
}
