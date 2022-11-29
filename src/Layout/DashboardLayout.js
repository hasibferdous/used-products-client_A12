import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
// import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email);
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
                    <button className='p-3 bg-red-400 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/admin">Admin Dashboard (Only for Admin)</Link></button>
                    <button className='p-3 bg-blue-400 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/seller">Seller Dashboard</Link></button>
                    <button className='p-3 bg-violet-400 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/buyer">Buyer Dashboard</Link></button>
                    <button className='p-3 bg-green-400 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard">Dasboard</Link></button>
                </ul>
                    




                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;