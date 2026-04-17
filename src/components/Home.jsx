import React from 'react';
import { useLoaderData } from 'react-router';
import SmallCard from './SmallCard';
import Banner from './Banner';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='py-20 w-11/12 sm:w-12/16  mx-auto'>
              <h1 className='font-bold text-4xl md:text-5xl text-center mb-4'>Friends to keep close in your life</h1>
              <p className='text-[#64748B] mb-8 text-center mx-auto max-w-xl'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
               relationships that matter most.</p>
               <div className='flex justify-center items-center'>
                   <button className='btn bg-[#244D3F] text-white rounded-sm'>+ Add a Friend</button>
               </div>
               <Banner></Banner>
               <div className='font-semibold text-2xl mb-4'>
                  Your Friend
               </div>
               <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                   {
                     data.map(value => <SmallCard key={value.id} details={value}></SmallCard>)
                   }
               </div>
               <div>
                  {
                    status
                  }
               </div>
        </div>
    );
};

export default Home;