import React from 'react';
import { useLoaderData } from 'react-router-dom';

const View = () => {
    const data =useLoaderData()
    console.log(data);
   
    return (
        <div>
           this is videp
         
        </div>
    );
};

export default View;