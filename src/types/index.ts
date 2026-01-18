export type TransactionType = 'income' | 'expense';

export interface FamilyMember {
    id: string;
    name: string;
    avatar?: string;
}

export interface BankAccount {
    id: string;
    bankName: string;
    balance: number;
    color?: string;
    icon?: string;
}

export interface CreditCard {
    id: string;
    name: string;
    limit: number;
    used: number;
    closingDate: string;
    color?: string;
}

export interface Goal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    color?: string;
}

export interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: TransactionType;
    category: string;
    accountId: string;
    memberId: string;
    installments?: string;
}

export interface DashboardData {
    totalBalance: number;
    totalIncome: number;
    totalExpenses: number;
    accounts: BankAccount[];
    goals: Goal[];
    recentTransactions: Transaction[];
    upcomingExpenses: Transaction[];
}
