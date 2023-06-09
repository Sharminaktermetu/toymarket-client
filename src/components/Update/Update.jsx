import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const toy =useLoaderData();
    const {price,
        quantity,
        description,
    _id}=toy
    const handleUpdate=(event)=>{
        event.preventDefault()
        const form =event.target;  
        const price =form.price.value;
        const quantity =form.quantity.value;
        const description =form.description.value;
        const updatedToy ={
           price,
           quantity,
           description,
           
        }
        console.log(updatedToy);
        fetch(`https://tiny-toy-town-server-adsmarketersaif13-gmailcom.vercel.app/toy/${_id}`,{
          method: 'PUT',
          headers: {
            'content-type':
            'application/json',
          },
          body: JSON.stringify(updatedToy),
        })
        .then(res=>res.json())
        .then(data=>{
        
          if (data.modifiedCount>0) {
            Swal.fire(
              'Success!',
              'Your file has been updated.',
              'success'
            )
            
          }
        })
    }


    return (
        <form onSubmit={handleUpdate} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-bold text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={price}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2 font-bold text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            defaultValue={quantity}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-bold text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Update</button>
      </form>
    );
};

export default Update;