import React from 'react';
import { NavLink , Link } from 'react-router';
import { IoMdHome } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
       <>
         <div className="flex w-full bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link className="btn btn-ghost   gap-0">
                     <span className='font-extrabold text-2xl'>Keen</span>
                     <span className='text-[#244D3F] text-2xl font-semibold'>Keeper</span>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                 <li><NavLink>
                    <IoMdHome />
                    Home</NavLink></li>
                 <li><NavLink to={`/timeline`}> <IoTimeOutline /> Timeline</NavLink></li>
                 <li><NavLink> <ImStatsDots /> Stats</NavLink></li>
                </ul>
            </div>
            </div>
       </>
    );
};

export default Navbar;