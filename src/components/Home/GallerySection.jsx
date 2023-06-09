import React from 'react';

const GallerySection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
      <div className="divider py-5"><p className='text-2xl font-bold'>Enjoyable <span className='text-red-600 font-extrabold'>Toys </span> for kids</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          <div className="relative overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover" src="https://www.ridemakerz.com/uploads/1/3/4/0/134067726/s338931909844079479_p287_i1_w1150.jpeg?width=2400&optimize=medium" alt="Image 1" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
              <button className="text-white text-lg font-semibold">View Image</button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover" src="https://img.aosomcdn.com/thumbnail/100/n0/product/2021/12/16/jFP59f17dc3c1e1cf.jpg" alt="Image 2" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
              <button className="text-white text-lg font-semibold">View Image</button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover" src="https://m.media-amazon.com/images/I/511FF9P3TwL._QL92_SH45_SS200_.jpg" alt="Image 3" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
              <button className="text-white text-lg font-semibold">View Image</button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover" src="https://i2-prod.coventrytelegraph.net/incoming/article8572931.ece/ALTERNATES/s1200b/Lightning-Mcqueen1.jpg" alt="Image 4" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
              <button className="text-white text-lg font-semibold">View Image</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
