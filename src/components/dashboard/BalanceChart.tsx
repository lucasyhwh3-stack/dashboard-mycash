import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jul', saldo: 4000 },
    { name: 'Ago', saldo: 3000 },
    { name: 'Set', saldo: 5000 },
    { name: 'Out', saldo: 4500 },
    { name: 'Nov', saldo: 6000 },
    { name: 'Dez', saldo: 5500 },
    { name: 'Jan', saldo: 8000 },
];

const BalanceChart = () => {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorSaldo" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-brand-primary)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="var(--color-brand-primary)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-neutral-100)" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'var(--color-neutral-400)', fontSize: 12, fontWeight: 600 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'var(--color-neutral-400)', fontSize: 12, fontWeight: 600 }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'var(--color-neutral-1000)',
                            border: 'none',
                            borderRadius: '12px',
                            color: 'var(--color-neutral-0)',
                            fontSize: '12px',
                            fontWeight: '700'
                        }}
                        itemStyle={{ color: 'var(--color-brand-primary)' }}
                        cursor={{ stroke: 'var(--color-brand-primary)', strokeWidth: 2 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="saldo"
                        stroke="var(--color-brand-primary)"
                        strokeWidth={4}
                        fillOpacity={1}
                        fill="url(#colorSaldo)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BalanceChart;
