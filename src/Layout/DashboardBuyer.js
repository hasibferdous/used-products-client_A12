import React from 'react';
import { Link} from 'react-router-dom';

const DashboardBuyer = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">    
                        <button className='p-3 bg-red-400 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard">My Orders</Link></button>
                    </ul>
               </div>
            </div>
        </div>
    );
};
export default DashboardBuyer;