﻿using System.Text.Json.Serialization;

namespace CashFlow.DataBase.Entities
{
    public class Money
    {

        public int Id { get; set; }

        public decimal  Total { get; set; }

        public decimal Rest { get; set; }
        
        public int UserId { get; set; }
        
        public User User { get; set; }

        public List<Budget> Budgets { get; set; } = new List<Budget>();

        public List<Expense> Expenses  { get; set; } = new List<Expense>();

        public List<Income> Incomes  { get; set; } = new List<Income>();
    }
}
