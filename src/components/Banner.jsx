import React from 'react';

const Banner = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 lg:grid-cols-4 '>
            <div className='shadow-sm transition-all duration-300 translate-1 p-8 text-center'>
                <h1 className='text-[#244D3F] font-semibold text-3xl'>10</h1>
                <p className='text-[#64748B]'>Total Friends</p>
            </div>
            <div className='shadow-sm transition-all duration-300 translate-1 p-8 text-center'>
                <h1 className='text-[#244D3F] font-semibold text-3xl'>4</h1>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className='shadow-sm transition-all duration-300 translate-1 p-8 text-center'>
                <h1 className='text-[#244D3F] font-semibold text-3xl'>6</h1>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div className='shadow-sm transition-all duration-300 translate-1 p-8 text-center'>
                <h1 className='text-[#244D3F] font-semibold text-3xl'>12</h1>
                <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
             
        </div>
    );
};

export default Banner;