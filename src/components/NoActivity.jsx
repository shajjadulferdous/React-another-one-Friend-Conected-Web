import React from 'react';

const NoActivity = () => {
    return (
         <>
          <div className='flex justify-center items-center mt-30'>
                    <img src={`/no_activity.webp`} className='w-40 h-40' alt="" />
            </div>
            <h1 className='font-bold text-center text-5xl mb-30'>No Activity Found</h1>
         </>
    );
};

export default NoActivity;