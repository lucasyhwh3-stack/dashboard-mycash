import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '../../utils/cn';

const expenses = [
    { id: 1, name: 'Conta de Luz', date: '21/01', amount: 154.00, account: 'Nubank **** 5897', paid: true },
    { id: 2, name: 'Condomínio', date: '15/01', amount: 450.00, account: 'Inter **** 5897', paid: true },
    { id: 3, name: 'Internet Fiber', date: '10/01', amount: 99.90, account: 'Nubank **** 5897', paid: true },
    { id: 4, name: 'Seguro Auto', date: '25/01', amount: 210.00, account: 'XP **** 1234', paid: false },
    { id: 5, name: 'Academia', date: '30/01', amount: 120.00, account: 'Picpay **** 5897', paid: false },
];

const UpcomingExpenses = () => {
    return (
        <div className="space-y-[24px]">
            {expenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between group">
                    <div className="flex-1 space-y-[4px]">
                        <h4 className="font-bold text-[20px] text-neutral-1000 leading-[28px]">{expense.name}</h4>
                        <p className="text-[12px] font-bold text-neutral-400 uppercase tracking-wider">Vence dia {expense.date}</p>
                        <div className="flex items-center gap-[8px]">
                            <span className="text-[12px] text-neutral-600">Crédito {expense.account}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-[12px]">
                        <span className="font-bold text-[16px] text-neutral-1000">R$ {expense.amount.toFixed(2).replace('.', ',')}</span>
                        <div className={cn(
                            "w-[32px] h-[32px] rounded-full flex items-center justify-center border transition-all",
                            expense.paid
                                ? "bg-neutral-0 border-neutral-100 text-feedback-success shadow-sm"
                                : "bg-neutral-50 border-neutral-200 text-neutral-300"
                        )}>
                            {expense.paid ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UpcomingExpenses;
