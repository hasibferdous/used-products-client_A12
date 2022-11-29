import React from 'react';
import { Link} from 'react-router-dom';

const DashboardSeller = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                                <button className='p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/addproduct">Add Products</Link></button>
                                <button className='p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/manageproducts">My Products</Link></button>
                    </ul>
               </div>
            </div>
        </div>
    );
};
export default DashboardSeller;