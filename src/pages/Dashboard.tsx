import { TrendingDown, TrendingUp, CreditCard as CardIcon, ChevronRight, Plus } from "lucide-react";
import Card from "../components/ui/Card";
import imgNubankLogo from "../assets/nubank.png";
import imgInterLogo from "../assets/inter.png";
import imgPicpayLogo from "../assets/picpay.png";

const Dashboard = () => {
    return (
        <div className="flex-1">
            {/* Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
                {[
                    { label: "Aluguel", value: "R$ 4.000,00", percent: "25%" },
                    { label: "Alimentação", value: "R$ 2.000,00", percent: "15%" },
                    { label: "Mercado", value: "R$ 1.500,00", percent: "5%" },
                    { label: "Academia", value: "R$ 120,00", percent: "3%" }
                ].map((item, index) => (
                    <Card key={index} padding="md" className="flex flex-col items-center gap-[16px] rounded-[20px]">
                        <div className="relative w-[72px] h-[72px]">
                            <svg viewBox="0 0 72 72" className="transform -rotate-90 w-full h-full">
                                <circle
                                    cx="36"
                                    cy="36"
                                    r="32"
                                    fill="none"
                                    stroke="var(--color-neutral-100)"
                                    strokeWidth="8"
                                />
                                <circle
                                    cx="36"
                                    cy="36"
                                    r="32"
                                    fill="none"
                                    stroke="var(--color-brand-primary)"
                                    strokeWidth="8"
                                    strokeDasharray={`${parseInt(item.percent) * 2.01} 201`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[12px] font-bold text-neutral-1000">{item.percent}</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-600 mb-[4px]">{item.label}</p>
                            <p className="font-bold text-xl text-neutral-1000">{item.value}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[32px]">
                <Card className="flex flex-col gap-[32px] rounded-[20px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-neutral-100 flex items-center justify-center">
                        <CardIcon size={20} className="text-neutral-1000" />
                    </div>
                    <div>
                        <p className="text-lg text-neutral-600 mb-[4px]">Saldo total</p>
                        <p className="font-bold text-[28px] text-feedback-info">R$ 2.000,00</p>
                    </div>
                </Card>

                <Card className="flex flex-col gap-[32px] rounded-[20px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-feedback-success/10 flex items-center justify-center">
                        <TrendingDown size={20} className="text-feedback-success" />
                    </div>
                    <div>
                        <p className="text-lg text-neutral-600 mb-[4px]">Receitas</p>
                        <p className="font-bold text-[28px] text-neutral-1000">R$ 12.000,00</p>
                    </div>
                </Card>

                <Card className="flex flex-col gap-[32px] rounded-[20px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-feedback-error/10 flex items-center justify-center">
                        <TrendingUp size={20} className="text-feedback-error" />
                    </div>
                    <div>
                        <p className="text-lg text-neutral-600 mb-[4px]">Despesas</p>
                        <p className="font-bold text-[28px] text-neutral-1000">R$ 10.000,00</p>
                    </div>
                </Card>
            </div>

            {/* Cards & Accounts Section */}
            <Card padding="lg" className="rounded-[20px] mb-[32px]">
                <div className="flex items-center justify-between mb-[24px]">
                    <div className="flex items-center gap-[12px]">
                        <CardIcon size={24} className="text-neutral-1000" />
                        <h2 className="font-bold text-xl text-neutral-1000">Cards & contas</h2>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <button className="w-[32px] h-[32px] rounded-full border border-neutral-100 flex items-center justify-center hover:bg-neutral-100 transition-colors">
                            <Plus size={16} />
                        </button>
                        <button className="w-[32px] h-[32px] rounded-full border border-neutral-100 flex items-center justify-center hover:bg-neutral-100 transition-colors">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                <div className="space-y-[16px]">
                    {[
                        { logo: imgNubankLogo, name: "Nubank", value: "R$ 120,00", due: "Vence dia 10", cardLast4: "5897" },
                        { logo: imgInterLogo, name: "Inter", value: "R$ 2.300,00", due: "Vence dia 21", cardLast4: "5897" },
                        { logo: imgPicpayLogo, name: "Picpay", value: "R$ 17.000,00", due: "Vence dia 12", cardLast4: "5897" }
                    ].map((card, index) => (
                        <div key={index} className="flex items-center justify-between py-[12px] border-b border-neutral-100 last:border-0 group cursor-pointer hover:bg-neutral-50/50 -mx-[32px] px-[32px] transition-colors">
                            <div className="flex items-center gap-[16px]">
                                <div className="w-[48px] h-[48px] shrink-0 bg-neutral-100 rounded-xl flex items-center justify-center p-[8px]">
                                    <img src={card.logo} alt={card.name} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <p className="font-semibold text-base text-neutral-1000">{card.name}</p>
                                    <p className="text-sm text-neutral-400">{card.due}</p>
                                    <p className="text-xs text-neutral-400">Crédito {card.name}, **** {card.cardLast4}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-xl text-neutral-1000">{card.value}</p>
                                <p className="text-sm text-neutral-400">**** {card.cardLast4}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Dashboard;
