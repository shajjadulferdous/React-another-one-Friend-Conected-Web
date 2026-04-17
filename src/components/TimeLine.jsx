import React, { useContext, useState } from 'react';
import { ConnectionConext } from '../Context/ConnectionContext';
import { Link } from 'react-router';
import TimeLineCard from './TimeLineCard';
import NoActivity from './NoActivity';

const TimeLine = () => {
    const {timeline} = useContext(ConnectionConext);
    // console.log(timeline);
   
    const [filterValue , setFilterValue] = useState('none');
    let filterData = null;
    if ( filterValue != 'none'){
         filterData = timeline.filter( e => e.type == filterValue);
    }else{
         filterData = [...timeline];
    }
    
    return (
        <div className='w-11/12 sm:w-12/16 mx-auto my-20'>
            <h1 className='text-4xl sm:text-5xl font-bold mb-6'>Timeline</h1>
          
            <div>   
                <select defaultValue="Filter Timeline" className="select select-ghost outline-gray-200 outline-2 my-6">
                <option disabled selected>Filter Timeline</option>
                <option onClick={()=>setFilterValue('none')}>Reset</option>
                <option onClick={()=>setFilterValue('text')}>Text</option>
                <option onClick={()=>setFilterValue('call')}>Call</option>
                <option  onClick={()=>setFilterValue('video')}>Video</option>
                </select>
            </div>
            {
            filterData.length ? 
            <div className='space-y-6'>
                {
                    filterData.map((d , index) => <TimeLineCard key={index} d={d}></TimeLineCard>)
                } 
             </div>
             :  <div className=''>
                <NoActivity></NoActivity>
            </div>
         }  
        </div>
    );
};

export default TimeLine;