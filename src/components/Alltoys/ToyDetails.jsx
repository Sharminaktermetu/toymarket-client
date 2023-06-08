import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
  const data = useLoaderData()
  const { pictureUrl,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    _id } = data
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={pictureUrl} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">{sellerName}</h2>
        <p>{name}</p>
        <p>{rating}</p>
        <p>{quantity}</p>
        <p>{subCategory}</p>
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