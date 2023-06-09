import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const View = () => {
    const data = useLoaderData()
    const {category,sellerName,image,description,price}=data

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{description}</h2>
                <div className="card-actions justify-end">
                <h2 className="card-body font-semibold">Category:{category}</h2>
                <h2 className="card-body font-semibold">Seller Name:{sellerName}</h2>
                <h2 className="card-body font-semibold">Price :{price}</h2>
               
                    <Link to="/">
                    <button className="btn btn-error">Back</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default View;