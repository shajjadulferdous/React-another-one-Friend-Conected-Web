import React from 'react';
import { NavLink , Link } from 'react-router';
import { IoMdHome } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
       <>
         <div className="flex w-full bg-base-100 shadow-sm py-3">
            <div className="flex-1">
                <Link className="btn btn-ghost   gap-0">
                     <span className='font-extrabold text-2xl'>Keen</span>
                     <span className='text-[#244D3F] text-2xl font-semibold'>Keeper</span>
                </Link>
            </div>
            <div className="flex-none pt-2">
                <ul className="flex pr-3 gap-4 md:gap-8">
                 <li><NavLink className={`flex justify-center items-center gap-1`}>
                    <IoMdHome />
                    Home</NavLink></li>
                 <li><NavLink className={`flex justify-center items-center gap-1`} to={`/timeline`}> <IoTimeOutline /> Timeline</NavLink></li>
                 <li><NavLink className={`flex justify-center items-center gap-1`} to={'/analysis'}> <ImStatsDots /> Stats</NavLink></li>
                </ul>
            </div>
         </div>
       </>
    );
};

export default Navbar;