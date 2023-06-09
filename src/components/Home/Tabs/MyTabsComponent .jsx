import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const MyTabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [toyData, setToyData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/tabs')
      .then(res => res.json())
      .then(data => setToyData(data))
  }, [])
  
  const handleDetails = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Log In first to view details!',
      })

    }


  }
  return (
    <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
      <TabList>
        {toyData.map((category) => (
          <Tab key={category._id}>{category.category}</Tab>
        ))}
      </TabList>

      {toyData.map((category, index) => (
        <TabPanel key={index}>
          {category.subCategories.map((subCategory) => (
            <div key={subCategory.name}>
              <h3>{subCategory.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {subCategory.toys.map((toy) => (
                  <div key={toy.name} className="bg-gray-100 p-4">
                    <img src={toy.image} alt={toy.name} className="w-full" />
                    <h4>{toy.name}</h4>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <Link to='/'>
                      <button onClick={() => handleDetails()} className="btn btn-error btn-sm ">details</button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default MyTabsComponent;