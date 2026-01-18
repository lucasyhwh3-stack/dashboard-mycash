import { Search, Plus, SlidersHorizontal } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-[80px] bg-neutral-0 border-b border-neutral-100 px-32 hidden lg:flex items-center justify-between sticky top-0 z-40 transition-all duration-300">
            <div className="flex items-center gap-24 flex-1">
                {/* Search Bar - Based on user image */}
                <div className="flex items-center gap-12 bg-neutral-100 px-16 py-8 rounded-xl w-72 focus-within:ring-1 ring-neutral-200 transition-all">
                    <Search size={18} className="text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className="bg-transparent border-none outline-none text-sm text-neutral-1000 w-full placeholder:text-neutral-400 font-medium"
                    />
                    <SlidersHorizontal size={18} className="text-neutral-600 cursor-pointer" />
                </div>

                {/* Date Selector */}
                <div className="flex items-center gap-8 bg-neutral-100 px-16 py-8 rounded-xl cursor-pointer hover:bg-neutral-200 transition-colors">
                    <div className="w-4 h-4 rounded-sm border border-neutral-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    </div>
                    <span className="text-sm font-semibold text-neutral-1000">01 Jan - 31 Jan 2026</span>
                </div>
            </div>

            <div className="flex items-center gap-24">
                {/* Avatars / Members */}
                <div className="flex items-center -space-x-8">
                    <div className="w-10 h-10 rounded-full border-2 border-neutral-0 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?u=1" alt="User 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-neutral-0 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?u=2" alt="User 2" className="w-full h-full object-cover" />
                    </div>
                    <button className="w-10 h-10 rounded-full border-2 border-neutral-0 bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors">
                        <Plus size={16} />
                    </button>
                </div>

                {/* Nova Transação Button */}
                <button className="bg-neutral-1000 text-neutral-0 px-20 py-10 rounded-xl font-bold hover:opacity-90 transition-all flex items-center gap-8 shadow-sm">
                    <Plus size={18} className="text-brand-primary" />
                    <span className="text-sm uppercase tracking-wider">Nova transação</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
