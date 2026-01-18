import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, Receipt, Target, Users } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for tailwind classes
function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
}

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Cartões', icon: CreditCard, path: '/cards' },
        { name: 'Transações', icon: Receipt, path: '/transactions' },
        { name: 'Metas', icon: Target, path: '/goals' },
        { name: 'Família', icon: Users, path: '/family' },
    ];

    return (
        <aside className="w-64 bg-white border-r border-gray-200 mobile:hidden flex flex-col">
            <div className="p-xl">
                <h1 className="text-2xl font-bold text-primary">mycash+</h1>
            </div>

            <nav className="flex-1 px-md">
                <ul className="space-y-xs">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={cn(
                                        "flex items-center gap-md px-md py-sm rounded-button transition-colors",
                                        isActive
                                            ? "bg-lime-400 text-gray-900 font-medium"
                                            : "text-gray-600 hover:bg-gray-100"
                                    )}
                                >
                                    <item.icon size={20} />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="p-xl border-t border-gray-100">
                <div className="flex items-center gap-sm">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Lucas Marte</p>
                        <p className="text-xs text-gray-600">Premium Plan</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
