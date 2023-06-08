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

        const handleDelete=(id)=>{
            const procedd =confirm('Are you sure?')
            if (procedd) {
                fetch(`http://localhost:5000/toy/${id}`,{
                method:'DELETE',
                
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('Service deleted')
                    const remaining =toys.filter(toy=>toy._id !== id)
                    setToys(remaining)
                  }
            })
            }
            
        }

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
      {toys.map(toy=><MyToysRow key={toy._id} toy={toy} handleDelete={handleDelete}></MyToysRow>)}

    </tbody>

  
    
  </table>
</div>
        </div>
    );
};

export default MyToys;