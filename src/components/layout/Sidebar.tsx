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
    LayoutDashboard
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
                "h-screen bg-white border-r border-gray-200 mobile:hidden flex flex-col relative transition-all duration-300 ease-in-out",
                isExpanded ? "w-sidebar-expanded" : "w-sidebar-collapsed"
            )}
        >
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-4 top-10 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 shadow-sm z-50 transition-transform hover:scale-110"
            >
                {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>

            {/* Logo Section */}
            <div className={cn(
                "p-xl flex items-center gap-md overflow-hidden transition-all duration-300",
                !isExpanded && "px-md"
            )}>
                <div className="min-w-[40px] h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                    <LayoutDashboard size={24} />
                </div>
                <h1 className={cn(
                    "text-2xl font-bold text-primary whitespace-nowrap transition-opacity duration-300",
                    !isExpanded ? "opacity-0 w-0" : "opacity-100"
                )}>
                    mycash+
                </h1>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-md overflow-hidden">
                <ul className="space-y-xs">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path} className="relative group">
                                <Link
                                    to={item.path}
                                    className={cn(
                                        "flex items-center gap-md px-md py-sm rounded-button transition-all duration-200",
                                        isActive
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-600 hover:bg-gray-100",
                                        !isExpanded && "justify-center px-0"
                                    )}
                                >
                                    <item.icon
                                        size={20}
                                        className={cn(
                                            "transition-colors",
                                            isActive && "text-lime-400"
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
                                    <div className="absolute left-full ml-md px-md py-sm bg-gray-900 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 delay-150 z-[100] shadow-lg translate-x-[-10px] group-hover:translate-x-0">
                                        {item.name}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* User Profile Section */}
            <div className={cn(
                "p-xl border-t border-gray-100 transition-all duration-300 overflow-hidden",
                !isExpanded && "px-md flex justify-center"
            )}>
                <div className="flex items-center gap-sm min-w-max">
                    <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden border border-gray-100">
                        {/* Placeholder avatar */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold text-sm">
                            LM
                        </div>
                    </div>
                    <div className={cn(
                        "transition-all duration-300 flex flex-col",
                        !isExpanded ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                    )}>
                        <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">Lucas Marte</p>
                        <p className="text-xs text-gray-600 whitespace-nowrap">Premium Plan</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
