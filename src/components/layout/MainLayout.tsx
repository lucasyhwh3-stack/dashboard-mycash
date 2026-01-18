import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex min-h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar - Persistent on desktop with transitions handled internally */}
            <Sidebar />

            {/* Main Container */}
            <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out">
                {/* Header - Persistent */}
                <Header />

                {/* Scrollable Content Area */}
                <main className="flex-1 overflow-y-auto p-lg mobile:p-md bg-gray-50">
                    <div className="max-w-[1440px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
