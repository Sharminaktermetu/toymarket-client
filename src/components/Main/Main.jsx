import React from 'react';
import Home from '../Home/Home';
import Navbar from '../Shared/Navabr/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;