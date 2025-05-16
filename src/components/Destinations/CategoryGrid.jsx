import React from 'react';
import { GrAction } from 'react-icons/gr';
import { LuBedDouble } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuHouse } from "react-icons/lu";
import { LiaCarSideSolid } from "react-icons/lia";
import { TbShip } from "react-icons/tb";
import { IoMdAirplane } from "react-icons/io";

const categories = [
  {label:'Hotel',icon: <LuBedDouble />},
  { label: 'Tour', icon: <FaMapLocationDot  />},
  { label: 'Activity',icon: <GrAction /> },
  { label: 'Holiday Rentals',  icon: <LuHouse/> },
  { label: 'Car', icon: <LiaCarSideSolid /> },
  { label: 'Cruise', icon: <TbShip /> },
  { label: 'Flights', icon : <IoMdAirplane /> },
];

const CategoryGrid = () => {
  return (
    <div className="px-5 pt-12 md:px-12 lg:px-20">
      <div className="flex gap-10 flex-wrap justify-center cursor-pointer">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-center justify-center w-36 h-20 border rounded-md transition text-base font-medium text-center"
          >
            <div className="text-xl mb-1">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
