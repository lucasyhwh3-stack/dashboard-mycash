import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    X,
    Home,
    CreditCard,
    Receipt,
    Target,
    Users,
    LogOut
} from 'lucide-react';
import { cn } from '../../utils/cn';
import Avatar from '../ui/Avatar';

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Cartões', icon: CreditCard, path: '/cards' },
        { name: 'Transações', icon: Receipt, path: '/transactions' },
        { name: 'Metas', icon: Target, path: '/goals' },
        { name: 'Família', icon: Users, path: '/family' },
    ];

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            {/* Mobile Header Bar */}
            <header className="h-[72px] bg-neutral-0 border-b border-neutral-100 px-24 flex items-center justify-between sticky top-0 z-[60] lg:hidden">
                <div className="flex items-center gap-10">
                    <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-brand-primary/20 transform rotate-12">
                        <span className="text-neutral-1000 font-black text-lg -rotate-12">M</span>
                    </div>
                    <h1 className="text-xl font-bold text-neutral-1000 tracking-tight">
                        Mycash<span className="text-brand-primary">+</span>
                    </h1>
                </div>

                <div
                    className="cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <Avatar size="md" initials="LM" className="bg-neutral-900 text-white border-2 border-white shadow-md" />
                </div>
            </header>

            {/* Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-neutral-1000/40 backdrop-blur-sm z-[70] transition-opacity duration-300 lg:hidden",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Menu */}
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 bg-neutral-0 z-[80] shadow-2xl transition-all duration-500 ease-out lg:hidden",
                    isOpen ? "translate-y-0" : "-translate-y-full"
                )}
            >
                <div className="p-24 space-y-32">
                    {/* Menu Header with Close Button */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-10">
                            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shrink-0">
                                <span className="text-neutral-1000 font-black text-lg">M</span>
                            </div>
                            <span className="font-bold text-neutral-1000">Menu Navigation</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-8 hover:bg-neutral-100 rounded-full transition-colors"
                        >
                            <X size={24} className="text-neutral-400" />
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <ul className="space-y-8">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={cn(
                                            "flex items-center gap-16 p-16 rounded-2xl transition-all duration-300",
                                            isActive
                                                ? "bg-neutral-1000 text-neutral-0 shadow-lg shadow-neutral-1000/20"
                                                : "text-neutral-500 hover:bg-neutral-100"
                                        )}
                                    >
                                        <item.icon
                                            size={20}
                                            className={cn(isActive && "text-brand-primary")}
                                        />
                                        <span className="font-bold text-base">{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Logout Button */}
                    <div className="pt-16 border-t border-neutral-100">
                        <button className="flex items-center gap-16 p-16 w-full text-feedback-error hover:bg-feedback-error/5 rounded-2xl transition-all group">
                            <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
                            <span className="font-bold text-base">Sair da conta</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderMobile;
