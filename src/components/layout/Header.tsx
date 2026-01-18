import { Search, Plus, SlidersHorizontal, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Avatar from '../ui/Avatar';

const Header = () => {
    return (
        <header className="h-[80px] bg-neutral-0 border-b border-neutral-100 px-32 hidden lg:flex items-center justify-between sticky top-0 z-40 transition-all duration-300">
            <div className="flex items-center gap-24 flex-1">
                {/* Search Bar */}
                <Input
                    placeholder="Pesquisar"
                    containerClassName="w-72"
                    icon={<Search size={18} />}
                    rightIcon={<SlidersHorizontal size={18} />}
                />

                {/* Date Selector */}
                <Button variant="secondary" size="md" className="gap-8 flex items-center">
                    <Calendar size={18} className="text-neutral-400" />
                    <span className="text-sm font-semibold text-neutral-1000">01 Jan - 31 Jan 2026</span>
                </Button>
            </div>

            <div className="flex items-center gap-24">
                {/* Avatars / Members */}
                <div className="flex items-center -space-x-8">
                    <Avatar size="md" initials="U1" className="border-2 border-neutral-0" />
                    <Avatar size="md" initials="U2" className="border-2 border-neutral-0" />
                    <Button variant="secondary" size="icon" className="w-10 h-10 border-2 border-neutral-0">
                        <Plus size={16} />
                    </Button>
                </div>

                {/* Nova Transação Button */}
                <Button variant="primary" size="md" className="gap-8">
                    <Plus size={18} className="text-brand-primary" />
                    <span className="text-sm uppercase tracking-wider">Nova transação</span>
                </Button>
            </div>
        </header>
    );
};

export default Header;
