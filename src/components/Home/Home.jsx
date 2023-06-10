import React, { useEffect } from 'react';
import Banner from './Banner';
import { Tab, Tabs } from 'react-tabs';

import GallerySection from './GallerySection';
import MyTabsComponent from './Tabs/MyTabsComponent ';
import Brands from './Brands';
import Steps from './Steps';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS file

const Home = () => {
    useEffect(()=>{
        AOS.init({duration:3000});
    },[])

    return (
        <>
       
            <Banner></Banner>
            <div data-aos="fade-down"><GallerySection></GallerySection></div>
            <div data-aos="fade-right"><MyTabsComponent></MyTabsComponent></div>
            <div data-aos="fade-left"> <Brands></Brands></div>
            <div data-aos="fade-down"> <Steps></Steps></div>
            

        
         </>
    );
};

export default Home;