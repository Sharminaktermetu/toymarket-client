import React from 'react';

const Steps = () => {
    return (
        <section className="bg-gray-100 py-16 my-16 rounded">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover a World of Toys</h2>
                        <p className="text-gray-600">Browse through our wide selection of toys for all ages and interests. From educational toys to action figures, we have something for everyone.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img className="w-full h-auto rounded-lg" src="https://img.freepik.com/free-vector/children-repairing-car-together_1308-80922.jpg?w=826&t=st=1686302303~exp=1686302903~hmac=d67074742b5632487479f7f4dfabb70723a5b0133fdb951b3121b332488aa1fa" alt="Toys" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Regular car</h3>
                        <p className="text-gray-600">Explore our collection of educational toys that promote learning and creativity.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Mini fire truck</h3>
                        <p className="text-gray-600">Find your favorite action figures from popular movies, TV shows, and comics.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sports car</h3>
                        <p className="text-gray-600">Challenge your mind with our collection of puzzles and games for all ages.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;