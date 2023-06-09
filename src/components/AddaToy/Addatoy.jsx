import React from 'react';
import Swal from 'sweetalert2';

const Addatoy = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const toyname = form.toyname.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addedToy = {
      pictureUrl,
      toyname,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description
    }
    console.log(addedToy);
    // form.reset()
    fetch('http://localhost:5000/toy', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(addedToy)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'You added a toy',
            showConfirmButton: false,
            timer: 1500
          })
        }
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
            <label htmlFor="toyname" className="block font-medium">Toy Name</label>
            <input type="text" id="toyname" name="toyname" className="border rounded px-2 py-1 input input-bordered w-full" />
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
            <select id="subCategory" name="subCategory" className="border rounded px-2 py-1 input input-bordered w-full">
              <option value="sports-car" className="py-2">Sports Car</option>
              <option value="truck" className="py-2">Truck</option>
              <option value="regular-car" className="py-2">Regular Car</option>
              <option value="mini-fire-truck" className="py-2">Mini Fire Truck</option>
              <option value="mini-police-car" className="py-2">Mini Police Car</option>
            </select>
          </div>


          <div className="mb-4">
            <label htmlFor="price" className="block font-medium">Price</label>
            <input type="number" id="price" name="price" className="border rounded px-2 py-1 input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block font-medium">Rating</label>
            <input type="number" id="rating" name="rating" max="5" min="0" className="border rounded px-2 py-1 input input-bordered w-full" />
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
          <button type="submit" className="btn btn-error text-white font-medium py-2 px-4  btn-block rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Addatoy;