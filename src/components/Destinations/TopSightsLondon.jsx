import React from 'react';
import {sights} from '../../RecommendationData'

const TopSightsLondon = () => {
 
  return (
    <div className="px-4 md:px-12 py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Top sights in London</h2>
        <p className="text-gray-500 mt-2">These popular destinations have a lot to offer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sights.map((sight) => (
          <div key={sight.id} className="flex border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <img
              src={sight.image}
              alt={sight.title}
              className="w-40 h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{sight.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{sight.description}</p>
              <a
                href={sight.link}
                className="text-sm text-blue-600 font-medium mt-2 inline-block hover:underline"
              >
                See More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition">
          Explore more →
        </button>
      </div>
    </div>
  );
};

export default TopSightsLondon;
