import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-20 bg-white border-b border-gray-200 px-lg flex items-center justify-between sticky top-0 z-40 transition-all duration-300">
            {/* Search Bar Placeholder */}
            <div className="flex items-center gap-md bg-gray-50 border border-gray-200 px-md py-sm rounded-button w-96 mobile:hidden focus-within:border-primary transition-colors">
                <Search size={18} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar transações, metas..."
                    className="bg-transparent border-none outline-none text-sm text-gray-900 w-full placeholder:text-gray-400"
                />
            </div>

            <div className="flex items-center gap-lg">
                {/* Date Filter Placeholder from Prompt 0 */}
                <div className="mobile:hidden px-md py-sm border border-gray-200 rounded-button text-xs font-semibold text-gray-600 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                    01 Jan - 31 Jan 2026
                </div>

                {/* Notifications */}
                <button className="p-sm text-gray-600 hover:text-gray-900 transition-colors mobile:hidden">
                    <Bell size={20} />
                </button>

                {/* Main CTA */}
                <button className="bg-primary text-white px-lg py-sm rounded-button font-medium hover:bg-primary-dark transition-all flex items-center gap-xs shadow-sm shadow-primary/20">
                    <Plus size={18} />
                    <span className="mobile:hidden text-sm">Nova transação</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
