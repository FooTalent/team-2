﻿
using System.ComponentModel.DataAnnotations;

namespace CashFlow.DTOs.Budget
{
    public class BudgetCreateDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public decimal Amount { get; set; }

        [Required]
        public int MoneyId { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        [Required]
        public string CategoryName { get; set; }

    }
}
