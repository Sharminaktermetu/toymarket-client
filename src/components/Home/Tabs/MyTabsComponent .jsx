import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyTabsComponent = () => {
  return (
    <Tabs>
      <TabList className="flex p-4 space-x-4 bg-gray-200">
        <Tab className="px-4 py-2 text-gray-600 bg-white rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
          Tab 1
        </Tab>
        <Tab className="px-4 py-2 text-gray-600 bg-white rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
          Tab 2
        </Tab>
        <Tab className="px-4 py-2 text-gray-600 bg-white rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
          Tab 3
        </Tab>
      </TabList>

      <TabPanel>
        <h2 className="text-2xl font-bold">Content for Tab 1</h2>
        <p>This is the content for Tab 1.</p>
      </TabPanel>
      <TabPanel>
        <h2 className="text-2xl font-bold">Content for Tab 2</h2>
        <p>This is the content for Tab 2.</p>
      </TabPanel>
      <TabPanel>
        <h2 className="text-2xl font-bold">Content for Tab 3</h2>
        <p>This is the content for Tab 3.</p>
      </TabPanel>
    </Tabs>
  );
};

export default MyTabsComponent;
