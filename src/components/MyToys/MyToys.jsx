import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
    const {user}=useContext(AuthContext)

  const url =  `http://localhost:5000/toy?sellerEmail=${user?.email}`

        useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        },[])

    return (
        <div>
            df
        </div>
    );
};

export default MyToys;