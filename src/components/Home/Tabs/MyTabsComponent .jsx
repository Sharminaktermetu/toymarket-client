import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const MyTabsComponent  = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const toyData=[
    {
      "category": "Educational and Learning Toys",
      "subCategories": [
        {
          "name": "Math Toys",
          "toys": [
            {
              "name": "Math Toy 1",
              "price": 19.99,
              "rating": 4.5,
              "image": "https://www.shutterstock.com/image-illustration/this-beautiful-car-toy-your-260nw-1966098811.jpg"
            },
            {
              "name": "Math Toy 2",
              "price": 24.99,
              "rating": 4.2,
              "image": "https://www.shutterstock.com/image-illustration/this-beautiful-car-toy-your-260nw-1966098811.jpg"
            }
          ]
        },
        {
          "name": "Language Toys",
          "toys": [
            {
              "name": "Language Toy 1",
              "price": 14.99,
              "rating": 4.7,
              "image": "https://5.imimg.com/data5/SELLER/Default/2021/7/TE/RG/JA/61594312/car-toy.jpg"
            },
            {
              "name": "Language Toy 2",
              "price": 21.99,
              "rating": 4.4,
              "image": "https://5.imimg.com/data5/SELLER/Default/2021/7/TE/RG/JA/61594312/car-toy.jpg"
            }
          ]
        }
      ]
    },
    {
      "category": "Engineering Toys",
      "subCategories": [
        {
          "name": "Building Blocks",
          "toys": [
            {
              "name": "Building Block Set 1",
              "price": 29.99,
              "rating": 4.8,
              "image": "https://5.imimg.com/data5/SELLER/Default/2021/7/TE/RG/JA/61594312/car-toy.jpg"
            },
            {
              "name": "Building Block Set 2",
              "price": 34.99,
              "rating": 4.6,
              "image": "https://5.imimg.com/data5/SELLER/Default/2021/7/TE/RG/JA/61594312/car-toy.jpg"
            }
          ]
        },
        {
          "name": "Robotic Kits",
          "toys": [
            {
              "name": "Robotic Kit 1",
              "price": 39.99,
              "rating": 4.3,
              "image": "https://i.etsystatic.com/10849216/r/il/7e8367/2455695056/il_fullxfull.2455695056_g2h7.jpg"
            },
            {
              "name": "Robotic Kit 2",
              "price": 36.99,
              "rating": 4.1,
              "image": "https://i.etsystatic.com/10849216/r/il/7e8367/2455695056/il_fullxfull.2455695056_g2h7.jpg"
            }
          ]
        }
      ]
    }
  ]
  
  return (
    <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
    <TabList>
      {toyData.map((category, index) => (
        <Tab key={index}>{category.category}</Tab>
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
                  <button>View Details</button>
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

export default MyTabsComponent ;