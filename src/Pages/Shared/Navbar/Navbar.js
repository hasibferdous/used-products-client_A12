import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/bikes">Bikes</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/login">Login</Link></li>
        </React.Fragment> 
    return (
        <div>
        <div className="navbar bg-violet-300 flex justify-between pl-5 pr-11 pb-9 pt-9 ">
        <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
            </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl shadow-2xl bg-slate-200 font-bold">BikeReSale.com</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 shadow-2xl bg-slate-200 rounded font-semibold mr-5">
                {menuItems}
            </ul>
        </div>
        </div>
        </div>
    );
};
export default Navbar;
