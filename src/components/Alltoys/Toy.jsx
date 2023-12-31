import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Toy = ({toy}) => {
  const {user}= useContext(AuthContext)
  const { 
    pictureUrl,
    toyname,
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
      
      <td>
        
          <div>
            <div className="font-bold">{toyname}</div>
            <div className="text-sm">{sellerName}</div>
          </div>
      
      </td>
      
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
       <Link to={`/details/${_id}`}>
       <button onClick={()=>handleDetails(_id)}className="btn btn-error btn-xs ">details</button>
       </Link>
      </th>
    </tr>
    );
};

export default Toy;