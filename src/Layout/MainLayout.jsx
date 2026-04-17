import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {/* {} <Outlet></Outlet> */}
            {
                navigation.state =='loading' ? <div className='flex justify-center items-center h-screen'>
                    <span className="loading loading-bars loading-xl"></span>
                </div>
                :  <Outlet></Outlet>
            }
           
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;