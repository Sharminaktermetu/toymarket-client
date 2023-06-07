import React from 'react';


const Banner = () => {
 
        
    return (
      <div className="hero min-h-screen" style={{backgroundImage: `url(https://img.freepik.com/free-vector/hand-drawn-christmas-toys-background_23-2148758008.jpg?w=2000)`}}>
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center  text-neutral-content">
        <div className="max-w-screen-lg">
          <h1 className="mb-5 text-5xl font-bold">Unleash your imagination </h1>
          <p className="mb-5">and explore the world of endless possibilities.</p>
          <button className="btn btn-error">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;