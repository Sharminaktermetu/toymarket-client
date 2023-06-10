import React from 'react';

const Brands = () => {
  return (<>
  <div className="divider my-24"><p className='text-2xl font-bold'>Our <span className='text-red-600 font-extrabold'>Brands </span></p></div>

    <div className="hero min-h-screen mt-16" style={{backgroundImage: `url(https://img.creator-prod.zmags.com/assets/images/6478e1b6b6fc7c5ba758645d.png?im=Resize,width=4011)`}}> 
     
        <div className='grid grid-cols-2'>
        <div className='w-1/2 mx-auto flex items-center justify-center'>
           <div>
           <h2 className='text-4xl text-start font-bold mb-4'>All my brands Shop this fan favorite Items</h2>
           
           </div>
        </div>
      <div>
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item w-350 h-350">
          <img src="https://img.creator-prod.zmags.com/assets/images/6351688fb6fc7c1ab6ae4d3b.png?im=Resize,width=500" className="w-1/2 h-48 " />
        </div> 
        <div className="carousel-item w-350 h-350">
          <img src="https://img.creator-prod.zmags.com/assets/images/635168a16df9f1595b45a128.png?im=Resize,width=1599" className="w-1/2 h-48  " />
        </div> 
        <div className="carousel-item w-350 h-350">
          <img src="https://img.creator-prod.zmags.com/assets/images/636d0a042a22913f01cf517a.png?im=Resize,width=1500" className="w-1/2 h-48  " />
        </div> 
        <div className="carousel-item w-350 h-350">
          <img src="https://img.creator-prod.zmags.com/assets/images/635168a8b6fc7c1ab6ae4d54.png?im=Resize,width=1024" className="w-1/2 h-48  " />
        </div> 
        <div className="carousel-item w-350 h-350">
          <img src="https://img.creator-prod.zmags.com/assets/images/63516897b6fc7c1ab6ae4d48.png?im=Resize,width=1061" className="w-1/2 h-48  " />
        </div> 
        <div className="carousel-item w-350 h-350">
          <img src="https://img.creator-prod.zmags.com/assets/images/635171fb6df9f1595b45ac36.png?im=Resize,width=372" className="w-1/2 h-48 " />
        </div> 
        <div className="carousel-item w-350 h-350">
          <img src="https://img.creator-prod.zmags.com/assets/images/63516acbb6fc7c1ab6ae4f49.png?im=Resize,width=512" className="w-1/2 h-48  " />
        </div>
      </div>
      </div>
        </div>
   

    </div>
    </>
  );
};

export default Brands;
