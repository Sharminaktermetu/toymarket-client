import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const {user}=useContext(AuthContext)
    const [toys, setToys]=useState([])

  const url =  `http://localhost:5000/toy?sellerEmail=${user?.email}`

        useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                setToys(data);
            })
        },[])

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Seller Name</th>
        <th>Sub Catagory</th>
        <th>Seller Email</th>
        <th>Rating</th>


      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {toys.map(toy=><MyToysRow key={toy._id} toy={toy}></MyToysRow>)}

    </tbody>

  
    
  </table>
</div>
        </div>
    );
};

export default MyToys;