import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Order'
import Customers from './pages/Customers'
import Transactions from './pages/Transactions'
import RecentOrders from './components/RecentOrders'
import PopularProducts from './components/PopularFoods'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<PopularProducts />} />
                    <Route path="orders" element={<RecentOrders />} />
                    <Route path="customers" element={<Customers />} />
                    {/* <Route path="transactions" element={<Transactions />} /> */}
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App
