import { Menu, Plus } from 'lucide-react';

const HeaderMobile = () => {
    return (
        <header className="h-[72px] bg-neutral-0 border-b border-neutral-100 px-16 flex items-center justify-between sticky top-0 z-40 lg:hidden">
            <div className="flex items-center gap-12">
                <button className="p-8 text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-bold text-neutral-1000">Mycash+</h1>
            </div>

            <button className="bg-neutral-1000 text-neutral-0 p-8 rounded-lg shadow-sm active:scale-95 transition-all">
                <Plus size={20} className="text-brand-primary" />
            </button>
        </header>
    );
};

export default HeaderMobile;
