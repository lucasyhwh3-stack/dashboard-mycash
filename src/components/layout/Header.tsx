import { useState } from 'react';
import { Search, Plus, SlidersHorizontal, Calendar } from 'lucide-react';
import Avatar from '../ui/Avatar';
import NewTransactionModal from '../modals/NewTransactionModal';
import imgMember1 from '../../assets/member1.png';
import imgMember2 from '../../assets/member2.png';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="h-[auto] py-[12px] px-[32px] hidden lg:flex items-center justify-between sticky top-0 z-40 bg-neutral-0/80 backdrop-blur-md">
                <div className="flex items-center gap-[8px] flex-1">
                    {/* Search Bar - Styled as per requested code */}
                    <div className="w-[175px] px-[24px] py-[12px] rounded-full border border-neutral-400 flex items-center gap-[8px] hover:border-neutral-900 transition-colors cursor-pointer group">
                        <Search size={16} className="text-neutral-900" />
                        <span className="text-[14px] text-neutral-1000 font-normal leading-[20px] tracking-[0.30px]">Pesquisar</span>
                    </div>

                    {/* Filter Icon */}
                    <button className="p-[12px] hover:bg-neutral-100 rounded-full transition-colors text-neutral-900">
                        <SlidersHorizontal size={16} />
                    </button>

                    {/* Date Selector - Styled as per requested code */}
                    <div className="px-[24px] py-[12px] rounded-full border border-neutral-400 flex items-center gap-[8px] hover:border-neutral-900 transition-colors cursor-pointer group">
                        <Calendar size={16} className="text-neutral-900" />
                        <span className="text-[14px] text-neutral-1000 font-normal leading-[20px] tracking-[0.30px]">01 Jan - 31 Jan 2026</span>
                    </div>
                </div>

                <div className="flex items-center gap-[24px]">
                    {/* Members - Styled with 2px white outline as requested */}
                    <div className="flex items-center -space-x-[12px]">
                        <div className="relative rounded-full border-[2px] border-neutral-0 shadow-sm overflow-hidden w-[44px] h-[44px]">
                            <Avatar size="lg" src={imgMember1} className="w-full h-full" />
                        </div>
                        <div className="relative rounded-full border-[2px] border-neutral-0 shadow-sm overflow-hidden w-[44px] h-[44px]">
                            <Avatar size="lg" src={imgMember2} className="w-full h-full" />
                        </div>
                        <button className="w-[44px] h-[44px] rounded-full border-[2px] border-neutral-0 bg-neutral-300 flex items-center justify-center text-neutral-900 hover:bg-neutral-400 transition-colors z-10 shadow-sm">
                            <Plus size={24} />
                        </button>
                    </div>

                    {/* Nova Transação Button - Black bg as per requested code */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-neutral-1000 text-neutral-0 px-[16px] py-[12px] rounded-full flex items-center gap-[8px] hover:opacity-90 transition-all shadow-md active:scale-95 group"
                    >
                        <Plus size={16} className="text-white group-hover:rotate-90 transition-transform" />
                        <span className="font-semibold text-[18px] leading-[24px] tracking-[0.30px]">Nova transação</span>
                    </button>
                </div>
            </header>
            <NewTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};
    );
};

export default Header;
