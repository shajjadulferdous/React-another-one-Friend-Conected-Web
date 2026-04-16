import React, { useContext, useState } from 'react';
import { ConnectionConext } from '../Context/ConnectionContext';
import { Link } from 'react-router';

const TimeLine = () => {
    const {timeline} = useContext(ConnectionConext);
    console.log(timeline);
    const [filterValue , setFilterValue] = useState('none');
    let filterData = null;
    if ( filterValue != 'none'){
         filterData = timeline.filter( e => e.type == filterValue);
    }else{
         filterData = [...timeline];
    }
    
    return (
        <div className='w-12/16 mx-auto my-20'>
            <h1 className='text-5xl font-bold mb-6'>Timeline</h1>
            <div className="dropdown my-6">
            <div tabIndex={0} role="button" className="btn ">Filter timeline</div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li ><Link onClick={()=>setFilterValue('none')}>None</Link></li>
                <li> <Link onClick={()=>setFilterValue('text')}>Text</Link></li>
                <li ><Link onClick={()=>setFilterValue('call')}>Call</Link></li>
                <li ><Link onClick={()=>setFilterValue('video')}>Video</Link></li>
            </ul>
            </div>
            <div className='space-y-6'>
                {
                    filterData.map((d , index) => <div key={index} className='text-[#64748B] flex p-4 gap-4 shadow-sm '>
                        <div>
                            <img src={d.icon} alt="" />
                        </div>
                        <div>
                            <h1> <span className='font-bold text-black'>{d.type.charAt(0).toUpperCase()+ d.type.slice(1)}</span> with {d.name}</h1>
                            <p>{d.date.toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            })}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TimeLine;