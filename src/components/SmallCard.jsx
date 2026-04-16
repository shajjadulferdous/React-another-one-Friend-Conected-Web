import React from 'react';
import { Link } from 'react-router';

const SmallCard = ({details}) => {
    const {id , name , status , picture , tags,days_since_contact} = details;
    return (
        <Link className='p-8 space-y-2 shadow-md rounded-md' to={`friend/${id}`}>
           <div className="flex items-center justify-center">
            <img
                src={picture}
                alt="friend"
                className="w-20 h-20 rounded-full object-cover"
            />
            </div>
            <h1 className='text-xl font-semibold text-center'>{name}</h1>
            <p className='text-[#64748B] text-center'>{days_since_contact}d ago</p>
            <div className='flex justify-center gap-2'>
                 {
                    tags.map((tag , index)=> <span key={index} className='bg-[#CBFADB] py-1 px-2 rounded-full'>{tag.toUpperCase()}</span> )
                 }
            </div>
            <div className='flex justify-center'>
               <p className={`${status == 'Overdue' ? 'bg-[#EF4444]': status =='On track' ? 'bg-[#244D3F]': 'bg-[#EFAD44]'} text-white w-fit px-2 py-1 rounded-full text-center`} >{status}</p>
            </div>
        </Link>
    );
};

export default SmallCard;