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
            <div className="dropdown my-6">
            <div tabIndex={0} role="button" className="btn ">Filter timeline</div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li ><Link onClick={()=>setFilterValue('none')}>None</Link></li>
                <li> <Link onClick={()=>setFilterValue('text')}>Text</Link></li>
                <li ><Link onClick={()=>setFilterValue('call')}>Call</Link></li>
                <li ><Link onClick={()=>setFilterValue('video')}>Video</Link></li>
            </ul>
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