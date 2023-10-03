import React, { useState } from "react";
import { useData } from "../contexts/DataContextProvider";
import HotelCard from "./HotelCard";
import { BsBoxArrowInDown } from 'react-icons/bs'
import Video from '../assets/hotels.mp4'

const CityHotels = () => {
  const { selectedCityHotels } = useData();
  const [displayCount, setDisplayCount] = useState(6); 

  const handleShowMore = () => {
    setDisplayCount(displayCount + 3); 
  };

  return (
    <section className="flex flex-col gap-10 items-center justify-center">
      {selectedCityHotels ? (
        <div className="grid grid-cols-3 gap-x-80 gap-y-20">
          {selectedCityHotels.slice(0, displayCount).map((hotel) => (
            <HotelCard key={hotel?.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <div className="font-semibold tracking-widest py-32 text-2xl">
          <p className="text-center mb-20 -mt-10">Select on any city to view hotels !!</p>
           <video muted loop autoPlay className='object-center rounded-3xl  h-screen w-full overflow-hidden object-cover -z-20 opacity-60 shadow-blue-700 bg-blend-lighten shadow-2xl' src={Video} type='video/mp4'></video>
        </div>
      )}
      {selectedCityHotels && selectedCityHotels.length > displayCount && (
        <button
          className="my-20 flex items-center gap-2 mx-auto py-3 px-7 tracking-widest bg-blue-700 text-white rounded-full hover:bg-blue-600"
          onClick={handleShowMore}
        >
          Show More <span className="text-lg"><BsBoxArrowInDown /></span>
        </button>
      )}
    </section>
  );
};

export default CityHotels;
