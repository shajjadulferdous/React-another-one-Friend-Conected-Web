import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { MdNotificationsPaused } from "react-icons/md";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { ConnectionConext } from '../Context/ConnectionContext';

const FriendDetails = () => {
    const {userId} = useParams();
    // console.log(userId);
    const friends = useLoaderData();
    const user = friends.find( f => f.id == userId);
    // console.log(user)
    const {picture , name , status , tags , bio , email,days_since_contact , goal , next_due_date} = user;
    const {handleCommunication} = useContext(ConnectionConext);
    return (
        <div className='flex mx-auto w-11/12 md:w-12/16  gap-6 my-20 flex-col md:flex-row'>

             <div className='space-y-4'>
                <div className='p-8 space-y-3 shadow-md'>
                <div className="flex items-center justify-center">
                <img
                    src={picture}
                    alt="friend"
                    className="w-40 h-40 rounded-full object-cover"
                />
            </div>
            <h1 className='text-xl font-semibold text-center'>{name}</h1>
            <div className='flex justify-center'>
               <p className={`${status == 'Overdue' ? 'bg-[#EF4444]': status =='On track' ? 'bg-[#244D3F]': 'bg-[#EFAD44]'} text-white w-fit px-2 py-1 rounded-full text-center`} >{status}</p>
            </div>
            <div className='flex justify-center gap-2'>
                 {
                    tags.map((tag , index)=> <span key={index} className='bg-[#CBFADB] py-1 px-2 rounded-full'>{tag.toUpperCase()}</span> )
                 }
            </div>
            <div className='text-[#64748B] text-center'>"{bio}"</div>
            <div className='text-[#64748B] text-center'>{email}</div>
            </div>
             
             <div className='flex justify-center items-center p-4 shadow-sm font-semibold gap-2 btn'> 
                <MdNotificationsPaused className='w-4 h-4 ' />
                Snooze 2 weeks
            </div>
             <div className='flex justify-center items-center p-4 btn shadow-sm font-semibold gap-2'> 
                <FiArchive className='w-4 h-4 ' />
                Archive
            </div>
             <div className='flex justify-center items-center p-4 shadow-sm btn font-semibold gap-2 text-red-500'> 
                <RiDeleteBin5Fill className='w-4 h-4 ' />
                Delete
            </div>
             </div>

            <div className='space-y-6'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 text-center gap-6 '>
                    <div className='p-8 shadow-sm w-full transition-all duration-300 hover:-translate-y-1'>
                        <h1 className='font-semibold text-3xl'>{days_since_contact}</h1>
                        <span className='text-[#64748B]'>Days Since Contact</span>
                    </div>
                    <div className='p-8 text-center shadow-sm w-full transition-all duration-300 hover:-translate-y-1'>
                        <h1 className='font-semibold text-3xl'>{goal}</h1>
                        <span className='text-[#64748B]'>Goal(Days)</span>
                    </div>
                    <div className='p-8 text-center shadow-sm w-full transition-all duration-300 hover:-translate-y-1'>
                        <h1 className='font-semibold text-3xl'>{next_due_date}</h1>
                        <span className='text-[#64748B]'>Next Due </span>
                    </div>
                    
                </div>
                <div className='p-6 shadow-sm'>
                    <div className='flex justify-between text-xl '>
                        <h1 className='font-bold'>Relationship Goal</h1>
                        <button className='btn'>Edit</button>
                    </div>
                    <div>Connect every <span className='font-bold'>{goal} days</span></div>
                </div>
                <div className='shadow-sm p-4'>
                    <h1 className='mb-4'>Quick Check-In</h1>
                    <div className='grid justify-between grid-cols-2 lg:grid-cols-3 gap-3'>
                        <div className='btn bg-base-200 py-16 flex justify-center items-center flex-col' onClick={()=>handleCommunication('call',name)}>
                            <div> <IoCallOutline className='w-8 h-8'/></div>
                            <div className='text-[18px]'>Call</div>
                        </div>
                        <div className=' btn bg-base-200 py-16 flex justify-center items-center flex-col' onClick={()=>handleCommunication('text',name)}>
                            <div><FaRegMessage className='w-8 h-8'/></div>
                            <div className='text-[18px]'>Text</div>
                        </div>
                        <div className=' btn  py-16 flex justify-center items-center flex-col' onClick={()=>handleCommunication('video',name)}>
                            <div><CiVideoOn className='w-8 h-8'/></div>
                            <div className='text-[18px]'>Video</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FriendDetails;