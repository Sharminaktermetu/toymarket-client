import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const Alltoys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch toy data from the server-side API endpoint
    fetch('https://tiny-toy-town-server.vercel.app/toy')
    .then(res=>res.json())
    .then(data=>{
        setToys(data)
        console.log(data);
    })
  }, []);


  return (
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
      {/* row 1 */}
     {
      toys.map(toy=><Toy key={toy._id} toy={toy}></Toy>)
     }
   


    </tbody>

    
  </table>
</div>
  );
};

export default Alltoys;
