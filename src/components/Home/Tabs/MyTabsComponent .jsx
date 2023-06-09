import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyTabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [toyData, setToyData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tabs')
      .then(res => res.json())
      .then(data => setToyData(data));
  }, []);

  const categories = [...new Set(toyData.map((toy) => toy.category))];

  const handleTabClick = (category) => {
    setSelectedTab(category);
  };

  const handleButtonClick = (toy) => {
    // Perform the desired action when the button is clicked
    console.log(`Button clicked for toy: ${toy.name}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <Tabs>
        <TabList className="flex justify-center">
          {categories.map((category, index) => (
            <Tab key={index} onClick={() => handleTabClick(category)}>
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
                    <div className='grid'>
                    <h3 className="text-lg font-semibold">{toy.name}</h3>
                    <p>Seller: {toy.sellerName}</p>
                    <p>Subcategory: {toy.subcategory}</p>
                    <p>Price: ${toy.price}</p>
                    </div>
                    <img src={toy.image} alt={toy.name} className="w-1/4 mt-4 mx-auto"/>
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
