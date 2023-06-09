import React from 'react';
import Banner from './Banner';
import { Tab, Tabs } from 'react-tabs';

import GallerySection from './GallerySection';
import MyTabsComponent from './Tabs/MyTabsComponent ';
import Brands from './Brands';
import Steps from './Steps';

const Home = () => {
    return (
        <>
       <div className='w-9/12 mx-auto'>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Brands></Brands>
           
            {/* <MyTabsComponent></MyTabsComponent> */}
        </div>
        
         </>
    );
};

export default Home;