import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import HeaderMobile from './HeaderMobile';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex min-h-screen bg-neutral-100 overflow-hidden">
            {/* Sidebar - Only rendered/visible on lg screens per Rules */}
            <Sidebar />

            {/* Main Container */}
            <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out">
                {/* Headers - Mutually exclusive visibility via CSS/Breakpoints */}
                <Header />
                <HeaderMobile />

                {/* Content Area - Responsive padding based on Rules */}
                <main className="flex-1 overflow-y-auto p-16 md:p-24 lg:p-32 bg-neutral-100">
                    <div className="max-w-layout-max mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
