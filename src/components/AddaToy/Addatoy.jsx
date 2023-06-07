import React from 'react';

const Addatoy = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
     const form =event.target;
     const pictureUrl =form.pictureUrl.value;
     const name =form.name.value;
     const sellerName =form.sellerName.value;
     const sellerEmail =form.sellerEmail.value;
     const subCategory =form.subCategory.value;
     const price =form.price.value;
     const rating =form.rating.value;
     const quantity =form.quantity.value;
     const addedToy ={
        pictureUrl,
        name,
        sellerName,
        sellerEmail,
        subCategory,
        price,
        rating,
        quantity
     }
     console.log(addedToy);
     form.reset()
     fetch('http://localhost:5000/toy',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(addedToy)
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
     })
    }
    return (
        <div className="mx-auto py-12">
        <h1 className="text-2xl font-bold mb-4 text-center">Add a Toy</h1>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-8'>
          <div className="mb-4">
            <label htmlFor="pictureUrl" className="block font-medium">Picture URL of the toy</label>
            <input type="text" id="pictureUrl" name="pictureUrl" className="border rounded px-2 py-1 input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium">Name</label>
            <input type="text" id="name" name="name" className="border rounded px-2 py-1 input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="sellerName" className="block font-medium">Seller Name</label>
            <input type="text" id="sellerName" name="sellerName" className="border rounded px-2 py-1 input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="sellerEmail" className="block font-medium">Seller Email</label>
            <input type="email" id="sellerEmail" name="sellerEmail" className="border rounded px-2 py-1 input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="subCategory" className="block font-medium">Sub-category</label>
            <input type="text" id="subCategory" name="subCategory" className="border rounded px-2 py-1 input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-medium">Price</label>
            <input type="number" id="price" name="price" className="border rounded px-2 py-1 input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block font-medium">Rating</label>
            <input type="number" id="rating" name="rating" className="border rounded px-2 py-1 input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-medium">Available Quantity</label>
            <input type="number" id="quantity" name="quantity" className="border rounded px-2 py-1 input input-bordered w-full" />
          </div>
          
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium">Detail Description</label>
            <textarea id="description" name="description" className="border rounded px-2 py-1 w-full" rows="4"></textarea>
          </div>
          <div className=''>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 btn btn-block rounded">Submit</button>
          </div>
        </form>
      </div>
    );
};

export default Addatoy;