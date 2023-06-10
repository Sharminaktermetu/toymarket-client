import React, { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';

const Signup = () => {
    const {createUser}=useContext(AuthContext);
    const navigate =useNavigate()
    const [error, setError] = useState('')
const handleSignUp =event=>{
    event.preventDefault();
    const form =event.target;
    const name =form.name.value;
    const email=form.email.value;
    const password =form.password.value;
    const photo =form.photo.value;
    setError('')
    if (password.length < 6) {
      setError("Password must be 6 charecter")
      return;
    }
    console.log(name,email,password,photo);
    createUser(email,password)
    .then(async (result) => {
      
      const loggedUser = result.user;
    await updateProfile(loggedUser,{
        displayName:form.name.value,
        photoURL:form.photo.value,
        
      })
      navigate("/")
    })
    .catch(error=>{
      setError("Check mail again")
    })

}

    return (
        <div className="hero min-h-screen">
          <Helmet>
        <title>Tiny Toy | Sign up</title>
      </Helmet>
        <div className="hero-content flex-col lg:flex-row gap-20 m-0">
          <div>
           {/* <img src={login} alt="" /> */}
          </div>
          {error && <div className="text-red-500 font-bold text-center">{error}</div>}
         <form onSubmit={handleSignUp}>
         <div className="card max-w-sm shadow-2xl p-6">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
             
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="Photo Url" name='photo' className="input input-bordered" required/>
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error">Sign up</button>
              </div>
            
        
              <small>Already have an account? <Link to="/login" className='btn btn-link'>Login</Link></small>
            </div>
          </div>
         </form>
        </div>
      </div>
    );
};

export default Signup;