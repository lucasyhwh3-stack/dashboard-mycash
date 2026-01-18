import { ShoppingCart, Utensils, Home, Zap, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { cn } from '../../utils/cn';

const activities = [
    {
        id: 1,
        name: 'Supermercado Condor',
        category: 'Alimentação',
        date: 'Hoje, 14:20',
        amount: -250.80,
        icon: ShoppingCart,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        id: 2,
        name: 'Salário Mensal',
        category: 'Receita',
        date: 'Hoje, 09:00',
        amount: 8500.00,
        icon: Zap,
        color: 'bg-green-100 text-green-600',
    },
    {
        id: 3,
        name: 'Aluguel Janeiro',
        category: 'Casa',
        date: 'Ontem, 20:00',
        amount: -3200.00,
        icon: Home,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        id: 4,
        name: 'Restaurante Madalosso',
        category: 'Lazer',
        date: '15 Jan, 21:30',
        amount: -180.00,
        icon: Utensils,
        color: 'bg-purple-100 text-purple-600',
    },
];

const RecentActivity = () => {
    return (
        <div className="space-y-16">
            {activities.map((activity) => (
                <div
                    key={activity.id}
                    className="flex items-center justify-between p-16 bg-neutral-0 border border-neutral-100 rounded-[20px] hover:shadow-md transition-all cursor-pointer group"
                >
                    <div className="flex items-center gap-16">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", activity.color)}>
                            <activity.icon size={22} />
                        </div>
                        <div>
                            <p className="font-bold text-neutral-1000 text-sm">{activity.name}</p>
                            <p className="text-xs text-neutral-400 font-medium">{activity.date} • {activity.category}</p>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className={cn(
                            "font-bold text-base flex items-center justify-end gap-4",
                            activity.amount > 0 ? "text-feedback-success" : "text-neutral-1000"
                        )}>
                            {activity.amount > 0 ? <ArrowUpRight size={14} /> : <ArrowDownLeft size={14} />}
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Math.abs(activity.amount))}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentActivity;
