interface Budget {
    name: string | null;
    amount: number;
    moneyId: number;
    createdDate: string;
    categoryName: string | null;
  }
  
  interface Expense {
    amount: number;
    category: any;
    caterogyId: number;
    date: string;
    id: number;
    moneyId: number;
  }
  
  interface Income {
    amount: number;
    date: string;
    id: number;
    moneyId: number;
  }
  
  interface MoneyResponse {
    budgets: Budget[];
    expenses: Expense[];
    id: number;
    incomes: Income[];
    rest: number;
    total: number;
    user: any;
  }  