import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyToys = () => {
    const {user}=useContext(AuthContext)
    const [toys, setToys]=useState([])
    const [sortBy, setSortBy] = useState('asc');

  const url =  `https://tiny-toy-town-server-adsmarketersaif13-gmailcom.vercel.app/toy?sellerEmail=${user?.email}`

        useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
              
              const sortedToys = data.sort((a, b) => {
                if (sortBy === 'asc') {
                  return a.price - b.price;
                } else {
                  return b.price - a.price;
                }
              });
      
              setToys(sortedToys);
            })
        },[url,sortBy])

        const handleDelete = (id) => {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
              if (result.isConfirmed) {
                fetch(`https://tiny-toy-town-server-adsmarketersaif13-gmailcom.vercel.app/toy/${id}`, {
                  method: 'DELETE',
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                      Swal.fire(
                        'Deleted!',
                        'Your toy has been deleted.',
                        'success'
                      );
                      const remaining = toys.filter((toy) => toy._id !== id);
                      setToys(remaining);
                    }
                  });
              }
            });
          };
   
          const handleSortChange = () => {
            if (sortBy === 'asc') {
              setSortBy('desc');
            } else {
              setSortBy('asc');
            }
          };


return (
      <div>
      <Helmet>
        <title>Tiny Toy | My toys</title>
      </Helmet>
      <div className="overflow-x-auto">
        <div>
        
        <button onClick={handleSortChange} className='btn-outline btn btn-error'>
            Sort by Price {sortBy === 'asc' ? '↑' : '↓'}
          </button>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Sub Category</th>
              <th>Seller Email</th>
              <th>Rating</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
                
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyToys;