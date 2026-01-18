import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex min-h-screen bg-neutral-100 overflow-hidden">
            {/* Sidebar - Persistent on desktop */}
            <Sidebar />

            {/* Main Container */}
            <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out">
                {/* Header - Persistent */}
                <Header />

                {/* Scrollable Content Area */}
                <main className="flex-1 overflow-y-auto p-32 mobile:p-16 bg-neutral-100">
                    <div className="max-w-layout-max mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
