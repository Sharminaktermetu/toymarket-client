import React from 'react';

const Toy = ({toy}) => {
    return (
        <div>
            <td>{toy.seller}</td>
              <td>{toy.name}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <button onClick={() => viewDetails(toy.id)}>View Details</button>
              </td>
        </div>
    );
};

export default Toy;