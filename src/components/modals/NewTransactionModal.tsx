import { X, Calendar, DollarSign, Tag, CreditCard, AlignLeft } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface NewTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NewTransactionModal = ({ isOpen, onClose }: NewTransactionModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-1000/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-[480px] rounded-[32px] shadow-2xl p-[32px] relative animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between mb-[32px]">
                    <h2 className="text-[24px] font-bold text-neutral-1000">Nova transação</h2>
                    <button
                        onClick={onClose}
                        className="w-[40px] h-[40px] rounded-full bg-neutral-50 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                    >
                        <X size={20} className="text-neutral-600" />
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-[24px]" onSubmit={(e) => e.preventDefault()}>

                    {/* Value Input */}
                    <div>
                        <label className="block text-[14px] font-semibold text-neutral-600 mb-[8px]">Valor</label>
                        <div className="relative">
                            <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[20px] font-bold text-neutral-400">R$</span>
                            <input
                                type="text"
                                placeholder="0,00"
                                className="w-full bg-neutral-50 border border-neutral-200 rounded-[16px] py-[16px] pl-[48px] pr-[16px] text-[32px] font-bold text-neutral-1000 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-[8px]">
                        <label className="block text-[14px] font-semibold text-neutral-600">Descrição</label>
                        <div className="relative">
                            <AlignLeft className="absolute left-[16px] top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                            <input
                                type="text"
                                placeholder="Ex: Compras do mês"
                                className="w-full bg-neutral-0 border border-neutral-200 rounded-[12px] py-[12px] pl-[48px] pr-[16px] text-[16px] text-neutral-1000 focus:outline-none focus:border-neutral-900 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Category & Date Grid */}
                    <div className="grid grid-cols-2 gap-[16px]">
                        <div className="space-y-[8px]">
                            <label className="block text-[14px] font-semibold text-neutral-600">Categoria</label>
                            <div className="relative">
                                <Tag className="absolute left-[16px] top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                                <select className="w-full bg-neutral-0 border border-neutral-200 rounded-[12px] py-[12px] pl-[48px] pr-[16px] text-[16px] text-neutral-1000 focus:outline-none focus:border-neutral-900 appearance-none cursor-pointer">
                                    <option value="" disabled selected>Selecione</option>
                                    <option value="alimentacao">Alimentação</option>
                                    <option value="moradia">Moradia</option>
                                    <option value="lazer">Lazer</option>
                                    <option value="transporte">Transporte</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-[8px]">
                            <label className="block text-[14px] font-semibold text-neutral-600">Data</label>
                            <div className="relative">
                                <Calendar className="absolute left-[16px] top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                                <input
                                    type="date"
                                    className="w-full bg-neutral-0 border border-neutral-200 rounded-[12px] py-[12px] pl-[48px] pr-[16px] text-[16px] text-neutral-1000 focus:outline-none focus:border-neutral-900 transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Account */}
                    <div className="space-y-[8px]">
                        <label className="block text-[14px] font-semibold text-neutral-600">Conta / Cartão</label>
                        <div className="relative">
                            <CreditCard className="absolute left-[16px] top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                            <select className="w-full bg-neutral-0 border border-neutral-200 rounded-[12px] py-[12px] pl-[48px] pr-[16px] text-[16px] text-neutral-1000 focus:outline-none focus:border-neutral-900 appearance-none cursor-pointer">
                                <option value="" disabled selected>Selecione a conta</option>
                                <option value="nubank">Nubank</option>
                                <option value="inter">Inter</option>
                                <option value="picpay">PicPay</option>
                                <option value="money">Dinheiro</option>
                            </select>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-[16px] pt-[16px]">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-[16px] rounded-full border border-neutral-200 font-bold text-neutral-600 hover:bg-neutral-50 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-[16px] rounded-full bg-neutral-1000 text-neutral-0 font-bold hover:opacity-90 transition-opacity"
                        >
                            Adicionar
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default NewTransactionModal;
