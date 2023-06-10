import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
  const data = useLoaderData()
  const { pictureUrl,
    toyname,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    _id } = data
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <Helmet>
        <title>Tiny Toy | Details</title>
      </Helmet>
      <figure><img src={pictureUrl} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">Seller name: {sellerName}</h2>
        <p>Name of the Toy: {toyname}</p>
        <p>Prodict Rating: {rating}</p>
        <p>Available Quantity: {quantity}</p>
        <p>Price: ${price}</p>
        <p>Sub-category: {subCategory}</p>
        <div className="card-actions justify-end">
          <Link to='/alltoys'>
          <button className="btn btn-error">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;