import React from 'react';
import {destinations} from '../../RecommendationData'

const DestinationsSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#0d1b3f]">Destinations near London</h2>
        <p className="text-gray-500 mt-2">These popular destinations have a lot to offer</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {destinations.map((location, index) => (
          <div key={index} className="group transition">
            <div className="overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="pt-2">
              <h3 className="text-base font-semibold text-[#0d1b3f]">{location.name}</h3>
              <p className="text-sm text-gray-500">4,090 properties</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsSection;

