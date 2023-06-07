import React from 'react';
import Banner from './Banner';
import { Tab, Tabs } from 'react-tabs';

import GallerySection from './GallerySection';
import MyTabsComponent from './Tabs/MyTabsComponent ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <MyTabsComponent></MyTabsComponent>
        </div>
    );
};

export default Home;