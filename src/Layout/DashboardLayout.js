import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 m-3 text-base-content">
                    <button className='p-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/admin">Admin Dashboard (Only for Admin)</Link></button>
                    <button className='p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/seller">Seller Dashboard</Link></button>
                    <button className='p-3 bg-violet-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/buyer">Buyer Dashboard</Link></button>
                    <button className='p-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/myorders">My Orders</Link></button>
                    <button className='p-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard">Dasboard</Link></button>
                </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default DashboardLayout;