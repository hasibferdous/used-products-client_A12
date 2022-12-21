import React from 'react';
import { Link} from 'react-router-dom';

const DashboardAdmin = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:hidden">
                {
                            <>
                            
                            <button className='p-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/allusers">All Buyers</Link></button> 
                            <button className='p-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/allsellers">All Sellers</Link></button> 
                            {/* <button className='p-3 bg-red-400 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/addproduct">Add Products</Link></button> */}
                            {/* <button className='p-3 bg-red-400 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/manageproducts">Manage Products</Link></button> */}
                            <button className='p-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/reporteditems">Reported Items</Link></button>   
                            </>
                        }
                </div>
                <div className="drawer drawer-mobile">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                       {
                            <>
                            
                            <button className='p-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/allusers">All Buyers</Link></button> 
                            <button className='p-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/allsellers">All Sellers</Link></button> 
                            {/* <button className='p-3 bg-red-400 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/addproduct">Add Products</Link></button> */}
                            {/* <button className='p-3 bg-red-400 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/manageproducts">Manage Products</Link></button> */}
                            <button className='p-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg m-3'><Link to="/dashboard/reporteditems">Reported Items</Link></button>   
                            </>
                        }
                    </ul>
               </div>
            </div>
        </div>
    );
};
export default DashboardAdmin;