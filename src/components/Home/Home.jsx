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
       
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Brands></Brands>
            <Steps></Steps>
            <MyTabsComponent></MyTabsComponent>
        
         </>
    );
};

export default Home;