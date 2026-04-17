import React from 'react';
import { NavLink , Link } from 'react-router';
import { IoMdHome } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    const links = <>
           <li><NavLink to={'/'} className={({isActive})=>`flex justify-center items-center gap-1 ${isActive ? 'bg-[#244D3F] btn text-white px-4 py-3' : ''}`}>
                    <IoMdHome />
                    Home</NavLink></li>
                 <li><NavLink className={({isActive})=>`flex justify-center items-center gap-1 ${isActive ? 'bg-[#244D3F] btn text-white px-4 py-3' : ''}`} to={`/timeline`}> <IoTimeOutline /> Timeline</NavLink></li>
                 <li><NavLink className={({isActive})=>`flex justify-center items-center gap-1 ${isActive ? 'bg-[#244D3F] btn text-white px-4 py-3' : ''}`} to={'/analysis'}> <ImStatsDots /> Stats</NavLink></li>
         </>
    return (
       <>
        
         <div className="navbar bg-base-100 shadow-sm sm:sticky top-0 z-1">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost   gap-0">
            <span className='font-extrabold text-2xl'>Keen</span>
            <span className='text-[#244D3F] text-2xl font-semibold'>Keeper</span>
    </Link>
  </div>
  <div className="navbar-end hidden sm:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
</div>
       </>
    );
};

export default Navbar;