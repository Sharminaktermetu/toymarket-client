import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Signup = () => {
    const {createUser}=useContext(AuthContext);

const handleSignUp =event=>{
    event.preventDefault();
    const form =event.target;
    const name =form.name.value;
    const email=form.email.value;
    const password =form.password.value;
    console.log(name,email,password);
    createUser(email,password)
    .then(result=>{
        const user =result.user;
        console.log(user);
    })
    .catch(error=>{
        console.log(error);
    })

}

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-20 m-0">
          <div>
           {/* <img src={login} alt="" /> */}
          </div>
         <form onSubmit={handleSignUp}>
         <div className="card max-w-sm shadow-2xl p-6">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" />
              </div>
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