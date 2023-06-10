import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const Alltoys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`https://tiny-toy-town-server.vercel.app/toy?limit=20`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
        console.log(data);
      });
  }, []);

  const handleSearch = () => {
    // Filter the toys array based on the search query
    const filteredToys = toys.filter(toy =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the toys state with the filtered toys
    setToys(filteredToys);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className='mb-8'>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search by Toy Name"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleSearch}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {toys.map(toy => (
              <Toy key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoys;
