import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyTabsComponent = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    // Fetch the tab data from the API
    fetch(`http://localhost:5000/toy/${subcategory}`)
      .then((response) => response.json())
      .then((data) => setTabs(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  // Group tabs by subCategory

  return (
    <Tabs>
      <TabList>
        {tabs.map(tab=><p>{tab.subcategory}</p>)}
      </TabList>

     
        <TabPanel>
          <h2 className="text-2xl font-bold">Content for</h2>
          <div className="flex flex-wrap">
            
          </div>
        </TabPanel>

    </Tabs>
  );
};

export default MyTabsComponent;
