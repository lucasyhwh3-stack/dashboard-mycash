import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cards" element={<div>Cards Page (Em construção)</div>} />
                    <Route path="/transactions" element={<div>Transactions Page (Em construção)</div>} />
                    <Route path="/goals" element={<div>Goals Page (Em construção)</div>} />
                    <Route path="/family" element={<div>Family Page (Em construção)</div>} />
                </Routes>
            </MainLayout>
        </Router>
    )
}

export default App
