import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, CreditCard } from 'lucide-react';
import { cn } from '../../utils/cn';
import Avatar from '../ui/Avatar';
import imgMember1 from '../../assets/member1.png';
import { logoPaths } from './logo-paths';

function Logo({ collapsed }: { collapsed: boolean }) {
    return (
        <div className={cn("flex items-center gap-[12px] transition-all", collapsed && "justify-center")}>
            <div className="h-[43px] w-[45px] shrink-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4611 43.1816">
                    <g>
                        <path d={logoPaths.p14e2600} fill="#060A11" />
                        <path d={logoPaths.p3036ef00} fill="#060A11" />
                        <path d={logoPaths.p26159200} fill="#060A11" />
                        <path d={logoPaths.p6735480} fill="#060A11" />
                        <path d={logoPaths.p2546980} fill="#060A11" />
                        <path d={logoPaths.p7266a00} fill="#060A11" />
                        <path d={logoPaths.pbb75a40} fill="#060A11" />
                    </g>
                </svg>
            </div>
            {!collapsed && (
                <div className="flex items-center gap-[2px] text-[#080b12] font-semibold text-[24px] leading-[28px]">
                    <span>mycash</span>
                    <span className="text-[#d7ff00]">+</span>
                </div>
            )}
        </div>
    );
}

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const location = useLocation();

    // Toggle button logic reversed compared to 'collapsed' logic, so isExpanded = !collapsed
    const toggleSidebar = () => setIsExpanded(!isExpanded);

    const menuItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: CreditCard, label: 'Cartões', path: '/cards' },
    ];

    return (
        <aside
            className={cn(
                "bg-white relative hidden lg:flex flex-col h-screen justify-between p-[32px] transition-all duration-300 border-r border-neutral-300 z-50",
                isExpanded ? "w-[240px]" : "w-[80px]"
            )}
        >
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute bg-white flex items-center justify-center p-[4px] right-[-12px] top-[67px] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] z-10 hover:scale-110 transition-transform"
            >
                <div className={cn("size-[16px] flex items-center justify-center", !isExpanded && "rotate-180")}>
                    {/* The icon in the reference is actually a chevron pointing left when expanded */}
                    {/* The design uses a simple div bar in the reference code I saw earlier, but Chevron is safer */}
                    <div className="w-[16px] h-[16px] relative overflow-hidden">
                        <div className="absolute top-0 left-[4.43px] w-[7.57px] h-[16px] bg-[#080B12] [clip-path:polygon(100%_0,0_50%,100%_100%)]"></div>
                    </div>
                </div>
            </button>

            {/* Top Section */}
            <div className="flex flex-col gap-[56px]">
                <Logo collapsed={!isExpanded} />

                {/* Navigation Menu */}
                <nav className="flex flex-col gap-[8px]">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={cn(
                                    "flex items-center gap-[8px] px-[16px] py-[12px] rounded-[100px] transition-all w-full group",
                                    isActive
                                        ? "bg-[#d7ff00]"
                                        : "hover:bg-neutral-50"
                                )}
                            >
                                <item.icon
                                    size={16}
                                    className="shrink-0 text-[#080b12]"
                                />
                                {isExpanded && (
                                    <span className="text-[#080b12] font-semibold text-[18px] leading-[24px] tracking-[0.3px] whitespace-nowrap">
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Member Section */}
            <div className={cn(
                "flex items-center gap-[12px]",
                !isExpanded && "justify-center"
            )}>
                <div className="shrink-0 w-[24px] h-[24px] relative">
                    <Avatar src={imgMember1} size="sm" className="w-full h-full border border-neutral-200" />
                </div>
                {/* Reference design didn't show text for profile in collapsed mode, so we hide it if !isExpanded if consistent */}
            </div>
        </aside>
    );
};

export default Sidebar;
