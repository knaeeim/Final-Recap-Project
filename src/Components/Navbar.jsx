import React, { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { CartContext } from '../Context/createContext';

const Navbar = () => {

    const {carts} = useContext(CartContext);

    const navLinks = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive && "bg-green-600 font-bold"}>Home</NavLink></li>
        <li><NavLink to={'/products'} className={({ isActive }) => isActive && "bg-green-600"}>Products</NavLink></li>
        <li><NavLink to={'/aboutus'} className={({ isActive }) => isActive && "bg-green-600"}>About us</NavLink></li>
        <li><NavLink to={'/contactus'} className={({ isActive }) => isActive && "bg-green-600"}>Contact Us</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar justify-between bg-base-100 shadow-sm">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <div className='relative'>
                        <Link to={"/cart"}><FaCartPlus size={25} /></Link>
                        <p className='absolute -top-4 -right-1 font-bold'>{carts.length || 0}</p>
                    </div>
                    <a className="btn"> Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;