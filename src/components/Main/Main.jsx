import React from 'react';
import Navbar from '../Shared/Navabr/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className='min-h-[calc(100vh-6px)]'>
            <Outlet />
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;