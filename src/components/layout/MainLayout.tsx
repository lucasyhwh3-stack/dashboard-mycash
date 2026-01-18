import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar - Persistent on desktop */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* Header - Persistent */}
                <Header />

                {/* Main Content Area */}
                <main className="flex-1 p-lg mobile:p-md overflow-auto">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
