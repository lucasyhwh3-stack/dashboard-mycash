import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, CreditCard, ChevronLeft } from 'lucide-react';
import { cn } from '../../utils/cn';
import Avatar from '../ui/Avatar';
import imgMember1 from '../../assets/member1.png';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const location = useLocation();

    const menuItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: CreditCard, label: 'Cartões', path: '/cards' },
    ];

    return (
        <aside
            className={cn(
                "h-screen bg-neutral-0 border-r border-neutral-300 hidden lg:flex flex-col relative transition-all duration-300 ease-in-out z-50",
                isExpanded ? "w-[300px] p-[32px]" : "w-[80px] p-[12px]"
            )}
        >
            {/* Logo Section */}
            <div className={cn(
                "mb-[56px] flex items-center h-[30px]",
                !isExpanded && "justify-center"
            )}>
                <span className={cn(
                    "font-bold text-[24px] text-neutral-1000 tracking-[-0.02em] whitespace-nowrap overflow-hidden transition-all duration-300",
                    !isExpanded ? "w-0 opacity-0" : "w-auto opacity-100"
                )}>
                    Mycash+
                </span>
                {!isExpanded && (
                    <span className="font-bold text-[24px] text-neutral-1000 tracking-[-0.02em]">M+</span>
                )}
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 space-y-[8px]">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={cn(
                                "flex items-center gap-[8px] py-[12px] px-[16px] rounded-full transition-all duration-300 group",
                                isActive
                                    ? "bg-[#D7FF00] text-neutral-1100 shadow-sm font-semibold"
                                    : "text-neutral-1100 hover:bg-neutral-50 font-semibold"
                            )}
                        >
                            <item.icon
                                size={16}
                                className={cn(
                                    "transition-transform group-hover:scale-110",
                                    isActive ? "text-neutral-1100" : "text-neutral-1100"
                                )}
                            />
                            {isExpanded && (
                                <span className="font-semibold text-[18px] leading-[24px] tracking-[0.30px] whitespace-nowrap">
                                    {item.label}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Member Section */}
            <div className={cn(
                "mt-auto flex flex-col gap-[12px]",
                !isExpanded && "items-center"
            )}>
                <div data-member="pai" className="w-[24px] h-[24px] relative">
                    <Avatar src={imgMember1} size="sm" className="w-full h-full border border-neutral-200" />
                </div>
            </div>

            {/* Toggle Button - Matching requested "icon-sidebar:close" style */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    "absolute -right-[16px] top-[35px] w-[32px] h-[32px] bg-white rounded-full shadow-lg border border-neutral-100 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group",
                    !isExpanded && "right-[-16px] rotate-180"
                )}
            >
                <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden">
                    <ChevronLeft size={16} className="text-neutral-1100 group-hover:-translate-x-1 transition-transform" />
                </div>
            </button>
        </aside>
    );
};

export default Sidebar;
