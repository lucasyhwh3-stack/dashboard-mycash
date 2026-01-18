import { Search, Plus, Settings, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Avatar from '../ui/Avatar';
import imgMember1 from '../../assets/member1.png';
import imgMember2 from '../../assets/member2.png';

const Header = () => {
    return (
        <header className="h-[80px] bg-neutral-100 px-32 hidden lg:flex items-center justify-between sticky top-0 z-40 transition-all duration-300">
            <div className="flex items-center gap-16 flex-1">
                {/* Search Bar */}
                <Input
                    placeholder="Pesquisar"
                    containerClassName="max-w-[200px]"
                    className="rounded-full bg-white border border-neutral-200"
                    icon={<Search size={16} className="text-neutral-900" />}
                />

                {/* Settings Button */}
                <button className="p-12 hover:bg-neutral-200 rounded-full transition-colors text-neutral-900">
                    <Settings size={18} />
                </button>

                {/* Date Selector */}
                <div className="flex items-center gap-8 px-24 py-10 rounded-full border border-neutral-200 bg-white cursor-pointer hover:bg-neutral-50 transition-colors">
                    <Calendar size={16} className="text-neutral-900" />
                    <span className="text-sm text-neutral-900 font-medium">01 Jan - 31 Jan 2026</span>
                </div>
            </div>

            <div className="flex items-center gap-24">
                {/* Members */}
                <div className="flex items-center -space-x-12">
                    <Avatar size="lg" src={imgMember1} className="border-2 border-white w-11 h-11" />
                    <Avatar size="lg" src={imgMember2} className="border-2 border-white w-11 h-11" />
                    <button className="w-11 h-11 rounded-full border-2 border-white bg-neutral-300 flex items-center justify-center text-neutral-900 hover:bg-neutral-400 transition-colors">
                        <Plus size={24} />
                    </button>
                </div>

                {/* Nova Transação Button */}
                <Button className="bg-neutral-1000 text-neutral-0 px-16 py-12 rounded-full flex items-center gap-8 hover:opacity-90 transition-all">
                    <Plus size={16} className="text-white" />
                    <span className="font-semibold text-lg">Nova transação</span>
                </Button>
            </div>
        </header>
    );
};

export default Header;
