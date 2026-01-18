import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Home,
    CreditCard,
    Receipt,
    Target,
    Users,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react';
import { cn } from '../../utils/cn';
import Avatar from '../ui/Avatar';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const location = useLocation();

    const menuItems = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Cartões', icon: CreditCard, path: '/cards' },
        { name: 'Transações', icon: Receipt, path: '/transactions' },
        { name: 'Metas', icon: Target, path: '/goals' },
        { name: 'Família', icon: Users, path: '/family' },
    ];

    const toggleSidebar = () => setIsExpanded(!isExpanded);

    return (
        <aside
            className={cn(
                "h-screen bg-neutral-0 border-r border-neutral-100 hidden lg:flex flex-col relative transition-all duration-500 ease-in-out z-50",
                isExpanded ? "w-[280px]" : "w-[100px]"
            )}
        >
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-5 top-10 w-10 h-10 bg-neutral-0 border border-neutral-100 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-900 shadow-sm z-[60] transition-all hover:scale-110 active:scale-95"
            >
                {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>

            {/* Logo Section */}
            <div className={cn(
                "py-40 px-32 flex items-center gap-12 transition-all duration-500",
                !isExpanded && "px-0 justify-center"
            )}>
                <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-primary/20 transform rotate-12">
                    <span className="text-neutral-1000 font-black text-xl -rotate-12">M</span>
                </div>
                <h1 className={cn(
                    "text-2xl font-bold text-neutral-1000 tracking-tight transition-all duration-500 overflow-hidden whitespace-nowrap",
                    !isExpanded ? "w-0 opacity-0" : "w-auto opacity-100"
                )}>
                    Mycash<span className="text-brand-primary">+</span>
                </h1>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-16">
                <ul className="space-y-8">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path} className="relative group">
                                <Link
                                    to={item.path}
                                    className={cn(
                                        "flex items-center gap-16 p-14 transition-all duration-300 rounded-full",
                                        isActive
                                            ? "bg-neutral-1000 text-neutral-0 shadow-lg shadow-neutral-1000/10"
                                            : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900",
                                        !isExpanded && "justify-center p-14"
                                    )}
                                >
                                    <item.icon
                                        size={22}
                                        className={cn(
                                            "transition-colors",
                                            isActive && "text-brand-primary"
                                        )}
                                    />
                                    <span className={cn(
                                        "font-bold text-sm transition-all duration-500 overflow-hidden whitespace-nowrap",
                                        !isExpanded ? "w-0 opacity-0" : "w-auto opacity-100"
                                    )}>
                                        {item.name}
                                    </span>
                                </Link>

                                {!isExpanded && (
                                    <div className="absolute left-full ml-16 px-16 py-8 bg-neutral-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-[100] shadow-xl translate-x-3 group-hover:translate-x-0">
                                        {item.name}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* User Profile */}
            <div className={cn(
                "p-20 mt-auto transition-all duration-500",
                !isExpanded && "flex flex-col items-center gap-20"
            )}>
                <button className={cn(
                    "flex items-center gap-16 p-14 w-full text-feedback-error hover:bg-feedback-error/5 rounded-full transition-all group",
                    !isExpanded && "justify-center"
                )}>
                    <LogOut size={22} className="group-hover:translate-x-1 transition-transform" />
                    <span className={cn(
                        "font-bold text-sm transition-all duration-500 overflow-hidden whitespace-nowrap",
                        !isExpanded ? "w-0 opacity-0" : "w-auto opacity-100"
                    )}>
                        Sair da conta
                    </span>
                </button>

                <div className={cn(
                    "p-12 bg-neutral-100 rounded-[24px] flex items-center gap-12 transition-all duration-500",
                    !isExpanded ? "bg-transparent p-0" : "hover:bg-neutral-200 cursor-pointer"
                )}>
                    <Avatar size="md" initials="LM" className="bg-neutral-900 text-white border-2 border-white shadow-md" />
                    <div className={cn(
                        "transition-all duration-500 flex flex-col overflow-hidden whitespace-nowrap",
                        !isExpanded ? "w-0 opacity-0" : "w-auto opacity-100"
                    )}>
                        <p className="text-sm font-bold text-neutral-1000 leading-none">Lucas Marte</p>
                        <p className="text-[10px] text-neutral-400 mt-2 font-medium">Conta Premium</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
