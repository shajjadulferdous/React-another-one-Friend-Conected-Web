import React from 'react';

const NoActivity = () => {
    return (
         <>
          <div className='flex justify-center items-center mt-20 '>
                    <img src={`/no_activity.webp`} className='w-50 h-50' alt="" />
            </div>
            <h1 className='font-bold text-center text-5xl mb-20'>No Activity Found</h1>
         </>
    );
};

export default NoActivity;