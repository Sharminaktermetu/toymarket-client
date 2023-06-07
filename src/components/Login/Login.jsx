import React, { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
 import { FaFacebookF,FaLinkedinIn,FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)
    const location =useLocation()
    const navigate =useNavigate()
    let from = location.state?.from?.pathname || "/";
    const handleLogin =event=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password =form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error);
        })
    
    }


    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-20 m-0">
          <div className='rounded-lg'>
           <img src="https://i.pinimg.com/originals/d1/2a/6e/d12a6e88e902ffabd87c63791522cfd8.gif" alt="" className='rounded-lg'/>
          </div>
         <form onSubmit={handleLogin}>
         <div className="card max-w-sm shadow-2xl p-6">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              
              <p className='text-center my-2'>  or sign in with </p>
              <div className='text-center flex flex-row gap-7 m-auto'>
                    <FaFacebookF></FaFacebookF>
                    <FaLinkedinIn></FaLinkedinIn>
                    <FaGoogle></FaGoogle>
              </div>
        
              <small>New to car Doctor? <Link to="/signup" className='btn btn-link'>Signup</Link></small>
            </div>
          </div>
         </form>
        </div>
      </div>
    );
};

export default Login;