const Dashboard = () => {
    return (
        <div className="space-y-lg">
            <h1 className="text-3xl font-bold text-gray-900">Visão Geral</h1>
            <p className="text-gray-600">Bem-vindo ao seu painel financeiro.</p>

            {/* Grid placeholders for future components */}
            <div className="grid grid-cols-4 mobile:grid-cols-1 tablet:grid-cols-2 gap-md">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-32 bg-white rounded-card shadow-sm border border-gray-100 p-md flex items-center justify-center text-gray-400">
                        Card Métrica {i}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-3 mobile:grid-cols-1 gap-lg">
                <div className="col-span-2 mobile:col-span-1 h-64 bg-white rounded-card shadow-sm border border-gray-100 p-lg flex items-center justify-center text-gray-400">
                    Gráfico de Fluxo Financeiro
                </div>
                <div className="h-64 bg-white rounded-card shadow-sm border border-gray-100 p-lg flex items-center justify-center text-gray-400">
                    Próximas Despesas
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
