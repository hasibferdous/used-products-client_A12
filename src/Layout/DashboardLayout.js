import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
                    <div>
            <Navbar></Navbar>
            <div class="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            <div>
            <Outlet></Outlet>
        </div> 
        <div class="drawer-side">
            <label htmlFor="dashboard-drawer" class="drawer-overlay"></label> 
            <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
        </div>
        </div>

        </div>
    );
};

export default DashboardLayout;