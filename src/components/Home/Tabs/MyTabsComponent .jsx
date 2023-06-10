import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet';
const MyTabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [toyData, setToyData] = useState([]);

  useEffect(() => {
    fetch('https://tiny-toy-town-server.vercel.app/tabs')
      .then(res => res.json())
      .then(data => setToyData(data));
  }, []);

  const categories = [...new Set(toyData.map((toy) => toy.category))];





  return (
    <div className="container mx-auto mt-8">
       <Helmet>
        <title>Tiny Toy | Home</title>
      </Helmet>
      <div className="divider my-24"><p className='text-2xl font-bold'>Featured<span className='text-red-600 font-extrabold'> Subcategory </span>Products</p></div>
      <Tabs>
        <TabList className="flex justify-center">
          {categories.map((category, index) => (
            <Tab key={index}>
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            {toyData.map((toy, index) => {
              if (toy.category === category) {
                return (
                  <div key={index} className="border rounded-lg p-4 mb-4">
                    <div className='grid font-semibold'>

                      <p>Seller: {toy.sellerName}</p>
                      <p>Subcategory: {toy.subcategory}</p>
                      <p>Price: ${toy.price}</p>
                    </div>
                    <img src={toy.image} alt={toy.name} className="w-1/4 mt-4 mx-auto" />
                    <div className='flex items-end justify-end'>
                      <Link to={`/view/${toy._id}`}>
                        <button onClick={() => handleButtonClick(toy)} className="btn btn-error btn-sm">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default MyTabsComponent;
