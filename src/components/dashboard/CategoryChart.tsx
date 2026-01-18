import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Aluguel', value: 4000, color: '#DAFD01' },
    { name: 'Alimentação', value: 2000, color: '#0F172A' },
    { name: 'Investimentos', value: 3000, color: '#94A3B8' },
    { name: 'Lazer', value: 1000, color: '#10B981' },
];

const CategoryChart = () => {
    return (
        <div className="w-full h-[300px] flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={8}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'var(--color-neutral-1000)',
                            border: 'none',
                            borderRadius: '12px',
                            color: 'var(--color-neutral-0)',
                            fontSize: '12px',
                            fontWeight: '700'
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 gap-x-24 gap-y-12 mt-16 w-full px-16">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center gap-8">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-xs font-bold text-neutral-600">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryChart;
