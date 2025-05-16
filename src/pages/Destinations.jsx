import React from 'react';
import InfoAndMap from '../components/Destinations/InfoAndMap';
import DestinationWeather from '../components/Destinations/DestinationWeather';
import RecommendedHotels from '../components/Destinations/RecommendedHotels';
import PopularTours from '../components/Destinations/PopularTours';
import TrendingActivities from '../components/Destinations/TrendingActivities';
import FeaturedHolidayRentals from '../components/Destinations/FeaturedHolidayRentals';
import CarHire from '../components/Destinations/CarHire';
import BlogInspiration from '../components/Destinations/BlogInspiration';
import TopSightsLondon from '../components/Destinations/TopSightsLondon';
import CustomerTestimonials from '../components/Destinations/CustomerTestimonials';
import FAQSection from '../components/Destinations/FAQSection';
import DestinationsSection from '../components/Destinations/DestinationsSection';
import CategoryGrid from '../components/Destinations/CategoryGrid';

const Destinations = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <div className="px-5 md:px-12 lg:px-20 mt-8">
      <div className="h-[500px] w-full bg-cover bg-center rounded-md flex flex-col justify-start px-10 pt-32 destination_bg">
          <h1 className="text-white text-5xl font-bold">Explore London</h1>
          <p className="text-white text-lg mt-2">
            Explore deals, travel guides and things to do in London
          </p>
        </div>
      </div>

      {/* Sections Below Header */}
      <CategoryGrid />
      <InfoAndMap />
      <DestinationWeather />
      <RecommendedHotels />
      <PopularTours />
      <TrendingActivities />
      <FeaturedHolidayRentals />
      <CarHire />
      <BlogInspiration />
      <TopSightsLondon />
      <CustomerTestimonials />
      <FAQSection />
      <DestinationsSection />
    </div>
  );
};

export default Destinations;
