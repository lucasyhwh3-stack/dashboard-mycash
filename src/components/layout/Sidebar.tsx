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
    LayoutDashboard,
    LogOut
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

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
                "h-screen bg-neutral-0 border-r border-neutral-200 mobile:hidden flex flex-col relative transition-all duration-300 ease-in-out z-50",
                isExpanded ? "w-[300px]" : "w-[80px]"
            )}
        >
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-4 top-10 w-8 h-8 bg-neutral-0 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-1000 shadow-sm z-[60] transition-transform hover:scale-110"
            >
                {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>

            {/* Logo Section */}
            <div className={cn(
                "py-32 px-12 flex items-center gap-12 overflow-hidden transition-all duration-300",
                !isExpanded && "justify-center"
            )}>
                <div className="w-10 h-10 bg-neutral-1000 rounded-lg flex items-center justify-center shrink-0">
                    <LayoutDashboard size={24} className="text-brand-primary" />
                </div>
                <h1 className={cn(
                    "text-2xl font-bold text-brand-primary whitespace-nowrap transition-all duration-300",
                    !isExpanded ? "opacity-0 w-0" : "opacity-100"
                )}>
                    mycash+
                </h1>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-12 overflow-hidden">
                <ul className="space-y-12">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path} className="relative group flex justify-center">
                                <Link
                                    to={item.path}
                                    className={cn(
                                        "flex items-center gap-12 p-12 transition-all duration-200 rounded-full",
                                        isActive
                                            ? "bg-neutral-1000 text-neutral-0"
                                            : "text-neutral-400 hover:bg-neutral-100",
                                        !isExpanded ? "w-12 h-12 justify-center" : "w-full"
                                    )}
                                >
                                    <item.icon
                                        size={24}
                                        className={cn(
                                            "transition-colors shrink-0",
                                            isActive ? "text-neutral-0" : "text-neutral-400"
                                        )}
                                    />
                                    <span className={cn(
                                        "whitespace-nowrap transition-all duration-300 font-medium",
                                        !isExpanded ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                                    )}>
                                        {item.name}
                                    </span>
                                </Link>

                                {/* Tooltip for collapsed state */}
                                {!isExpanded && (
                                    <div className="absolute left-full ml-12 px-16 py-8 bg-neutral-1000 text-neutral-0 text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 delay-150 z-[100] shadow-lg -translate-x-8 group-hover:translate-x-0">
                                        {item.name}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bottom Section: Sair & Profile */}
            <div className={cn(
                "px-12 py-32 mt-auto border-t border-neutral-100 transition-all duration-300 overflow-hidden space-y-24",
                !isExpanded && "flex flex-col items-center"
            )}>
                {/* Sair Button */}
                <button className={cn(
                    "flex items-center gap-12 p-12 w-full text-feedback-error hover:bg-neutral-100 rounded-full transition-all",
                    !isExpanded && "justify-center w-12 h-12 p-0"
                )}>
                    <LogOut size={24} className="shrink-0" />
                    <span className={cn(
                        "font-medium transition-all duration-300 text-sm",
                        !isExpanded ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                    )}>
                        Sair
                    </span>
                </button>

                {/* User Profile */}
                <div className={cn(
                    "flex items-center gap-12 min-w-max",
                    !isExpanded && "justify-center"
                )}>
                    <div className="w-10 h-10 rounded-full bg-neutral-200 shrink-0 overflow-hidden border border-neutral-100">
                        <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center text-neutral-0 font-bold text-sm">
                            LM
                        </div>
                    </div>
                    <div className={cn(
                        "transition-all duration-300 flex flex-col",
                        !isExpanded ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                    )}>
                        <p className="text-sm font-semibold text-neutral-900 whitespace-nowrap">Lucas Marte</p>
                        <p className="text-xs text-neutral-600 whitespace-nowrap">lucas@marte.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
