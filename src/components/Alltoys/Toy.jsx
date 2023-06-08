import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Toy = ({toy}) => {
  const {user}= useContext(AuthContext)
  const { 
    pictureUrl,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    _id
  }=toy
  const handleDetails=()=>{
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Log In first to view details!',
      })
      
    }
    
   
  }
 
    return (
      <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{sellerName}</div>
          </div>
        </div>
      </td>
      
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
       <Link to={`/details/${_id}`}>
       <button onClick={()=>handleDetails(_id)}className="btn btn-ghost btn-xs">details</button>
       </Link>
      </th>
    </tr>
    );
};

export default Toy;