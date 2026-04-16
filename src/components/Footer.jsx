import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-center'>
            <div className='pt-20 pb-10 space-y-4 '>
                <h1 className='font-bold text-6xl text-white'>KeenKeeper</h1>
                <p className='text-white opacity-80'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-white text-xl leading-7'>Social Links</p>
                <div className='flex gap-3 justify-center items-center'>
                   <div className='p-3 bg-white rounded-full w-fit'><IoLogoFacebook className=' h-7 w-7 rounded-full' /></div>
                   <div className='p-3 bg-white rounded-full w-fit'><RiInstagramFill className=' h-7 w-7 rounded-full' /></div>
                   <div className='p-3 bg-white rounded-full w-fit'><FaSquareXTwitter className=' h-7 w-7 rounded-full' /></div>
                </div>
            </div>
            {/* <hr /> */}
            <footer className="footer sm:footer-horizontal  text-neutral-content items-center py-5 opacity-50 w-12/16 mx-auto border-t border-[#1A8862] ">
            <aside className="grid-flow-col items-center">    
                <p>Copyright © {new Date().getFullYear()} -KeenKeeper. All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                  <div>Privacy Policy </div>
                  <div> Terms of Service</div>
                  <div>Cookies</div>
            </nav>
           </footer>
        </div>
    );
};

export default Footer;