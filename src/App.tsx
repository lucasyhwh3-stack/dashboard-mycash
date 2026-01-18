
import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import { FinancialChart } from "./components/FinancialChart";
import { Search, Calendar, Plus, Wallet, TrendingUp, TrendingDown, CreditCard, ChevronDown, CheckCircle2, ArrowUpRight } from "lucide-react";
import imgMembers1 from "./assets/member1.png";
import imgMembers2 from "./assets/member2.png";
import imgNubankLogo from "./assets/nubank.png";
import imgInterLogo from "./assets/inter.png";
import imgNubankLogo1 from "./assets/picpay.png";

// Re-implementing UI components without missing SVG imports
function CardDespesa({ label, value, percentage, color = "#C4E703" }: { label: string, value: string, percentage: string, color?: string }) {
    return (
        <div className="bg-white flex-1 min-w-[180px] p-6 rounded-[20px] border border-gray-200 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
            <div className="size-[72px] relative flex items-center justify-center">
                <svg className="absolute inset-0 size-full" viewBox="0 0 72 72">
                    <circle cx="36" cy="36" r="32" stroke="#E7E8EA" strokeWidth="8" fill="none" />
                    <circle cx="36" cy="36" r="32" stroke={color} strokeWidth="8" fill="none" strokeDasharray="201" strokeDashoffset={201 - (201 * parseInt(percentage) / 100)} transform="rotate(-90 36 36)" />
                </svg>
                <span className="text-xs font-semibold text-gray-900">{percentage}%</span>
            </div>
            <div className="text-center">
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-xl font-bold text-gray-900">{value}</p>
            </div>
        </div>
    );
}

function ResumoCard({ label, value, icon: Icon, iconColor, textColor = "text-gray-900" }: { label: string, value: string, icon: any, iconColor: string, textColor?: string }) {
    return (
        <div className="bg-white flex-1 p-6 rounded-[20px] border border-gray-200 flex flex-col gap-8 hover:shadow-md transition-shadow">
            <div className={`size-10 rounded-full flex items-center justify-center`} style={{ backgroundColor: `${iconColor}15` }}>
                <Icon size={24} style={{ color: iconColor }} />
            </div>
            <div>
                <p className="text-lg text-gray-500">{label}</p>
                <p className={`text-[28px] font-bold ${textColor}`}>{value}</p>
            </div>
        </div>
    );
}

function AccountItem({ logo, name, value, due, card }: { logo: string, name: string, value: string, due: string, card: string }) {
    return (
        <div className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex gap-3 items-center">
                <div className="size-10 rounded-[0px] flex items-center justify-center overflow-hidden bg-white p-2">
                    <img src={logo} className="size-full object-contain" alt="" />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                    <p className="text-xl font-bold text-gray-900">{value}</p>
                    <p className="text-xs text-gray-500 font-medium">Vence dia {due}</p>
                </div>
            </div>
            <p className="text-xs text-gray-400 font-semibold">{card}</p>
        </div>
    );
}

export default function App() {
    // Sidebar manages its own state in the existing component

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />

            <main className="flex-1 p-8 flex flex-col gap-8 overflow-auto max-w-[1400px] mx-auto w-full">
                {/* Navbar */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex gap-4 items-center flex-wrap">
                        <div className="relative border border-gray-300 rounded-full px-6 py-2.5 flex items-center gap-2 bg-white w-64 focus-within:ring-2 focus-within:ring-black transition-all">
                            <Search size={18} className="text-gray-400" />
                            <input type="text" placeholder="Pesquisar" className="text-sm outline-none bg-transparent w-full" />
                        </div>
                        <div className="border border-gray-300 rounded-full px-6 py-2.5 flex items-center gap-2 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                            <Calendar size={18} className="text-gray-400" />
                            <span className="text-sm font-medium">01 Jan - 31 Jan 2026</span>
                        </div>
                        <div className="flex -space-x-3">
                            <img src={imgMembers1} className="size-11 rounded-full border-2 border-white shadow-sm" alt="" />
                            <img src={imgMembers2} className="size-11 rounded-full border-2 border-white shadow-sm" alt="" />
                            <div className="size-11 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center shadow-sm">
                                <Plus size={20} className="text-gray-600" />
                            </div>
                        </div>
                    </div>
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold text-lg hover:bg-black transition-all active:scale-95 shadow-lg shadow-black/10">
                        <Plus size={20} />
                        Nova transação
                    </button>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                    <div className="xl:col-span-8 flex flex-col gap-8">
                        {/* Expense Progress */}
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            <CardDespesa label="Aluguel" value="R$ 4.000,00" percentage="25" />
                            <CardDespesa label="Alimentação" value="R$ 2.000,00" percentage="15" />
                            <CardDespesa label="Mercado" value="R$ 1.500,00" percentage="5" />
                            <CardDespesa label="Academia" value="R$ 120,00" percentage="3" />
                        </div>

                        {/* Financial Summary */}
                        <div className="flex gap-6 flex-wrap md:flex-nowrap">
                            <ResumoCard label="Saldo total" value="R$ 2.000,00" icon={Wallet} iconColor="#080B12" textColor="text-blue-600" />
                            <ResumoCard label="Receitas" value="R$ 12.000,00" icon={TrendingUp} iconColor="#15BE78" textColor="text-emerald-600" />
                            <ResumoCard label="Despesas" value="R$ 10.000,00" icon={TrendingDown} iconColor="#E61E32" textColor="text-rose-600" />
                        </div>

                        {/* Main Chart Card */}
                        <FinancialChart />
                    </div>

                    <div className="xl:col-span-4 flex flex-col gap-8">
                        {/* Accounts Card */}
                        <div className="bg-white p-8 rounded-[20px] border border-gray-200 flex flex-col gap-8 shadow-sm h-fit">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <CreditCard size={24} className="text-gray-900" />
                                    Cards & contas
                                </h2>
                                <div className="flex gap-2">
                                    <button className="size-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                        <Plus size={16} />
                                    </button>
                                    <button className="size-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                        <ArrowUpRight size={16} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <AccountItem logo={imgNubankLogo} name="Nubank" value="R$ 120,00" due="10" card="**** 5897" />
                                <AccountItem logo={imgInterLogo} name="Inter" value="R$ 2.300,00" due="21" card="**** 5897" />
                                <AccountItem logo={imgNubankLogo1} name="Picpay" value="R$ 17.000,00" due="12" card="**** 5897" />
                            </div>
                        </div>

                        {/* Upcoming Expenses Card */}
                        <div className="bg-white p-8 rounded-[20px] border border-gray-200 flex flex-col gap-8 shadow-sm h-fit">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <Calendar size={24} className="text-gray-900" />
                                    Próximas despesas
                                </h2>
                                <button className="size-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                    <Plus size={16} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-6">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                                        <div>
                                            <p className="text-lg font-bold text-gray-900">Conta de Luz</p>
                                            <p className="text-xs font-semibold text-gray-500">Vence dia 21/01</p>
                                            <p className="text-xs text-gray-400">Crédito Nubank **** 5897</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-base font-bold text-[rgb(0,0,0)]">R$ 154,00</span>
                                            <CheckCircle2 size={24} className="text-emerald-500 opacity-20 hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
