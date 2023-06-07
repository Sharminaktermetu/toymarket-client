import React, { useEffect, useState } from 'react';

const Alltoys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch toy data from the server-side API endpoint
    fetch('http://localhost:5000/toys')
    .then(res=>res.json())
    .then(data=>{
        setToys(data)
    })
  }, []);

  const fetchToys = async () => {
    try {
      // Make an API request to fetch the toy data
      const response = await fetch('/api/toys');
      const data = await response.json();

      // Set the fetched toy data to the state
      setToys(data);
    } catch (error) {
      console.error('Error fetching toys:', error);
    }
  };

  return (
    <div>
      <h2>All Toys</h2>
      <table>
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy.id}>
              <td>{toy.seller}</td>
              <td>{toy.name}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <button onClick={() => viewDetails(toy.id)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alltoys;
