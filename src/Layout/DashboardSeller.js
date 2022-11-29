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
                       {
                            <>
                                <li><Link to="/dashboard/addproduct">Add Products</Link></li>
                                <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                            </>
                        }
                    </ul>
               </div>
            </div>
        </div>
    );
};
export default DashboardSeller;