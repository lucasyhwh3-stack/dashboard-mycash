import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import Avatar from '../ui/Avatar';
import { cn } from '../../utils/cn';
import imgMember1 from '../../assets/member1.png';
import imgMember2 from '../../assets/member2.png';

const transactions = [
    { id: 1, member: imgMember1, date: '17/01/2026', description: 'Conta de água', category: 'Manutenção', account: 'Conta corrente', installment: '-', value: -100.00 },
    { id: 2, member: imgMember2, date: '17/01/2026', description: 'Conta de Luz', category: 'Manutenção', account: 'Conta corrente', installment: '-', value: -150.00 },
    { id: 3, member: imgMember1, date: '17/01/2026', description: 'Passeio no parque', category: 'Lazer', account: 'Cartão XP', installment: '1/1', value: -750.00 },
    { id: 4, member: imgMember1, date: '16/01/2026', description: 'Salário Base', category: 'Receita', account: 'Nubank', installment: '-', value: 8500.00 },
    { id: 5, member: imgMember2, date: '15/01/2026', description: 'Supermercado', category: 'Alimentação', account: 'Inter', installment: '1/3', value: -450.00 },
];

const DetailedStatement = () => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-neutral-100 pb-[24px]">
                        <th className="py-[16px] font-bold text-[18px] text-neutral-1000">Membro</th>
                        <th className="py-[16px] font-bold text-[18px] text-neutral-1000">Datas</th>
                        <th className="py-[16px] font-bold text-[18px] text-neutral-1000">Descrição</th>
                        <th className="py-[16px] font-bold text-[18px] text-neutral-1000">Categorias</th>
                        <th className="py-[16px] font-bold text-[18px] text-neutral-1000">Conta/cartão</th>
                        <th className="py-[16px] font-bold text-[18px] text-neutral-1000 text-center">Parcelas</th>
                        <th className="py-[16px] font-bold text-[18px] text-neutral-1000 text-right">Valor</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-neutral-50">
                    {transactions.map((t) => (
                        <tr key={t.id} className="group hover:bg-neutral-50/50 transition-colors">
                            <td className="py-[20px]">
                                <Avatar src={t.member} size="sm" className="border border-white shadow-sm" />
                            </td>
                            <td className="py-[20px] text-[12px] text-neutral-600 font-medium">{t.date}</td>
                            <td className="py-[20px]">
                                <div className="flex items-center gap-[8px]">
                                    <div className={cn(
                                        "w-[8px] h-[10px] rounded-sm shrink-0",
                                        t.value < 0 ? "bg-feedback-error" : "bg-feedback-success"
                                    )} />
                                    <span className="text-[12px] text-neutral-1000 font-medium">{t.description}</span>
                                </div>
                            </td>
                            <td className="py-[20px] text-[12px] text-neutral-600 font-medium">{t.category}</td>
                            <td className="py-[20px] text-[12px] text-neutral-600 font-medium">{t.account}</td>
                            <td className="py-[20px] text-[12px] text-neutral-600 font-medium text-center">{t.installment}</td>
                            <td className="py-[20px] text-right">
                                <span className={cn(
                                    "text-[12px] font-bold",
                                    t.value < 0 ? "text-neutral-1000" : "text-feedback-success"
                                )}>
                                    {t.value < 0 ? '-' : '+'} R$ {Math.abs(t.value).toFixed(2).replace('.', ',')}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex items-center justify-between mt-[32px] pt-[24px] border-t border-neutral-100">
                <span className="text-[16px] font-bold text-neutral-1000">Mostrando 1 a 5 de 17</span>
                <div className="flex items-center gap-[16px]">
                    <button className="p-[8px] hover:bg-neutral-100 rounded-lg transition-colors group">
                        <ArrowDownLeft size={16} className="text-neutral-400 group-hover:text-neutral-900 rotate-45" />
                    </button>
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            className={cn(
                                "text-[16px] font-bold transition-colors w-[32px] h-[32px] flex items-center justify-center rounded-lg",
                                page === 1 ? "bg-neutral-1000 text-neutral-0" : "text-neutral-1000 hover:bg-neutral-100"
                            )}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="p-[8px] hover:bg-neutral-100 rounded-lg transition-colors group">
                        <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-900 rotate-45" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailedStatement;
