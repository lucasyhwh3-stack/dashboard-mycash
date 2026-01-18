const Header = () => {
    return (
        <header className="h-20 bg-white border-b border-gray-200 px-lg flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-md">
                <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
            </div>

            <div className="flex items-center gap-lg">
                <button className="bg-primary text-white px-lg py-sm rounded-button font-medium hover:bg-primary-dark transition-colors">
                    + Nova transação
                </button>
            </div>
        </header>
    );
};

export default Header;
