import { TrendingDown, TrendingUp, CreditCard as CardIcon, ChevronRight, Plus, Activity, List } from "lucide-react";
import Card from "../components/ui/Card";
import BalanceChart from "../components/dashboard/BalanceChart";
import UpcomingExpenses from "../components/dashboard/UpcomingExpenses";
import DetailedStatement from "../components/dashboard/DetailedStatement";
import imgNubankLogo from "../assets/nubank.png";
import imgInterLogo from "../assets/inter.png";
import imgPicpayLogo from "../assets/picpay.png";

const Dashboard = () => {
    return (
        <div className="flex-1 space-y-[32px] pb-[40px]">
            {/* Main Row: Category Cards & Cards/Accounts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px]">
                {/* Left Side: Category Progress & Summary */}
                <div className="lg:col-span-8 space-y-[30px]">
                    {/* Category Progress Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                        {[
                            { label: "Aluguel", value: "R$ 4.000,00", percent: "25%" },
                            { label: "Alimentação", value: "R$ 2.000,00", percent: "15%" },
                            { label: "Mercado", value: "R$ 1.500,00", percent: "5%" },
                            { label: "Academia", value: "R$ 120,00", percent: "3%" }
                        ].map((item, index) => (
                            <Card key={index} padding="md" className="flex flex-col items-center gap-[12px] rounded-[20px]">
                                <div className="relative w-[72px] h-[72px] flex items-center justify-center">
                                    <svg viewBox="0 0 72 72" className="transform -rotate-90 w-full h-full absolute">
                                        <circle
                                            cx="36"
                                            cy="36"
                                            r="32"
                                            fill="none"
                                            stroke="#E7E8EA"
                                            strokeWidth="8"
                                        />
                                        <circle
                                            cx="36"
                                            cy="36"
                                            r="32"
                                            fill="none"
                                            stroke="#C4E703"
                                            strokeWidth="8"
                                            strokeDasharray={`${parseInt(item.percent) * 2.01} 201`}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span className="text-[12px] font-bold text-neutral-1000 z-10">{item.percent}</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-[14px] text-neutral-1000 mb-[4px] font-medium leading-[20px]">{item.label}</p>
                                    <p className="font-bold text-[20px] text-neutral-1000 leading-[28px]">{item.value}</p>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Financial Summary (Total, Income, Expenses) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                        <Card className="flex flex-col gap-[32px] rounded-[20px] p-[24px]">
                            <div className="w-[24px] h-[24px] text-neutral-1000">
                                <CardIcon size={24} />
                            </div>
                            <div className="space-y-[4px]">
                                <p className="text-[18px] text-neutral-1000 leading-[28px]">Saldo total</p>
                                <p className="font-bold text-[28px] text-[#2A89EF] leading-[36px]">R$ 2.000,00</p>
                            </div>
                        </Card>

                        <Card className="flex flex-col gap-[32px] rounded-[20px] p-[24px]">
                            <div className="w-[24px] h-[24px] text-[#15BE78]">
                                <TrendingDown size={24} />
                            </div>
                            <div className="space-y-[4px]">
                                <p className="text-[18px] text-neutral-1000 leading-[28px]">Receitas</p>
                                <p className="font-bold text-[28px] text-neutral-1000 leading-[36px]">R$ 12.000,00</p>
                            </div>
                        </Card>

                        <Card className="flex flex-col gap-[32px] rounded-[20px] p-[24px]">
                            <div className="w-[24px] h-[24px] text-[#E61E32]">
                                <TrendingUp size={24} />
                            </div>
                            <div className="space-y-[4px]">
                                <p className="text-[18px] text-neutral-1000 leading-[28px]">Despesas</p>
                                <p className="font-bold text-[28px] text-neutral-1000 leading-[36px]">R$ 10.000,00</p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Right Side: Cards & Accounts */}
                <div className="lg:col-span-4">
                    <Card padding="lg" className="h-full rounded-[20px] border border-neutral-100">
                        <div className="flex items-center justify-between mb-[32px]">
                            <div className="flex items-center gap-[8px]">
                                <CardIcon size={24} className="text-neutral-1000" />
                                <h2 className="font-bold text-[20px] text-neutral-1000 leading-[28px]">Cards & contas</h2>
                            </div>
                            <div className="flex items-center gap-[12px]">
                                <button className="w-[32px] h-[32px] rounded-full border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-colors">
                                    <Plus size={16} />
                                </button>
                                <button className="w-[32px] h-[32px] rounded-full border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-colors">
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-[32px]">
                            {[
                                { logo: imgNubankLogo, name: "Nubank", value: "R$ 120,00", due: "Vence dia 10", cardLast4: "5897" },
                                { logo: imgInterLogo, name: "Inter", value: "R$ 2.300,00", due: "Vence dia 21", cardLast4: "5897" },
                                { logo: imgPicpayLogo, name: "Picpay", value: "R$ 17.000,00", due: "Vence dia 12", cardLast4: "5897" }
                            ].map((card, index) => (
                                <div key={index} className="flex justify-between items-start">
                                    <div className="space-y-[4px] flex-1">
                                        <div className="flex items-center gap-[8px]">
                                            <div className="w-[16px] h-[16px] rounded-full overflow-hidden shrink-0">
                                                <img src={card.logo} alt={card.name} className="w-full h-full object-contain" />
                                            </div>
                                            <span className="text-[14px] leading-[20px] text-neutral-1000">{card.name}</span>
                                        </div>
                                        <p className="font-bold text-[24px] leading-[32px] text-neutral-1000">{card.value}</p>
                                        <p className="text-[12px] font-bold text-neutral-1000 leading-[16px]">Vence dia {card.due.split(' ').pop()}</p>
                                    </div>
                                    <span className="text-[12px] font-bold text-neutral-1000 leading-[16px]">**** {card.cardLast4}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>

            {/* Second Row: Financial Flow & Upcoming Expenses */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px]">
                {/* Financial Flow Chart */}
                <div className="lg:col-span-8">
                    <Card padding="lg" className="rounded-[20px] border border-neutral-100">
                        <div className="flex items-center justify-between mb-[32px]">
                            <div className="flex items-center gap-[8px]">
                                <Activity size={24} className="text-neutral-1000" />
                                <h3 className="font-bold text-[20px] text-neutral-1000 leading-[28px]">Fluxo financeiro</h3>
                            </div>
                            <div className="flex items-center gap-[16px]">
                                <div className="flex items-center gap-[8px]">
                                    <div className="w-[9px] h-[9px] bg-[#C4E703] rounded-full" />
                                    <span className="text-[12px] font-bold text-neutral-1000">Receitas</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <div className="w-[9px] h-[9px] bg-[#E61E32] rounded-full" />
                                    <span className="text-[12px] font-bold text-neutral-1000">Despesas</span>
                                </div>
                            </div>
                        </div>
                        <BalanceChart />
                    </Card>
                </div>

                {/* Upcoming Expenses */}
                <div className="lg:col-span-4">
                    <Card padding="lg" className="rounded-[20px] border border-neutral-100 h-full">
                        <div className="flex items-center justify-between mb-[32px]">
                            <div className="flex items-center gap-[8px]">
                                <List size={24} className="text-neutral-1000" />
                                <h3 className="font-bold text-[20px] text-neutral-1000 leading-[28px]">Próximas despesas</h3>
                            </div>
                            <button className="w-[32px] h-[32px] rounded-full border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-colors">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                        <UpcomingExpenses />
                    </Card>
                </div>
            </div>

            {/* Third Row: Detailed Statement */}
            <div className="w-full">
                <Card padding="lg" className="rounded-[20px] border border-neutral-100">
                    <div className="flex items-center justify-between mb-[50px]">
                        <div className="flex items-center gap-[8px]">
                            <Activity size={24} className="text-neutral-1000" />
                            <h2 className="font-bold text-[20px] text-neutral-1000 leading-[28px]">Extrato detalhado</h2>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <div className="relative group">
                                <div className="flex items-center gap-[8px] px-[24px] py-[12px] border border-neutral-300 rounded-full cursor-pointer hover:border-neutral-900 transition-colors">
                                    <Activity size={16} className="text-neutral-900" />
                                    <span className="text-[14px] text-neutral-1000 leading-[20px]">Buscar lançamentos</span>
                                </div>
                            </div>
                            <button className="flex items-center gap-[8px] px-[12px] py-[8px]">
                                <span className="text-[12px] font-bold text-neutral-1000">Despesas</span>
                                <ChevronRight size={16} className="rotate-90" />
                            </button>
                        </div>
                    </div>
                    <DetailedStatement />
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
