import React from 'react';
import ErrorImg from '../assets/notFound.jpg'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='space-y-4 h-screen flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center mt-20 mb-5'>
                <img src={ErrorImg} width={300} alt="" />
            </div>
            <h1 className='text-center text-4xl'>This Page Not Found ! 404 Error</h1>
           <div className='flex justify-center items-center'>
               <Link className="btn btn-neutral" to={'/'}>Go Home</Link>
           </div>
        </div>
        
    );
};

export default ErrorPage;