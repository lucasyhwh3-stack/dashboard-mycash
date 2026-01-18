import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-[--header-height] bg-neutral-0 border-b border-neutral-200 px-32 flex items-center justify-between sticky top-0 z-40 transition-all duration-300">
            {/* Search Bar */}
            <div className="flex items-center gap-12 bg-neutral-100 border border-neutral-200 px-16 py-8 rounded-md w-96 mobile:hidden focus-within:border-brand-primary transition-colors">
                <Search size={18} className="text-neutral-400" />
                <input
                    type="text"
                    placeholder="Buscar transações, metas..."
                    className="bg-transparent border-none outline-none text-sm text-neutral-900 w-full placeholder:text-neutral-400"
                />
            </div>

            <div className="flex items-center gap-24">
                {/* Date Filter */}
                <div className="mobile:hidden px-16 py-8 border border-neutral-200 rounded-md text-xs font-semibold text-neutral-600 bg-neutral-0 cursor-pointer hover:bg-neutral-100 transition-colors">
                    01 Jan - 31 Jan 2026
                </div>

                {/* Notifications */}
                <button className="p-8 text-neutral-600 hover:text-neutral-1000 transition-colors mobile:hidden">
                    <Bell size={20} />
                </button>

                {/* Main CTA */}
                <button className="bg-brand-primary text-neutral-1000 px-24 py-8 rounded-md font-bold hover:bg-brand-primary-hover transition-all flex items-center gap-8 shadow-sm">
                    <Plus size={18} />
                    <span className="mobile:hidden text-sm uppercase tracking-wider">Nova transação</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
