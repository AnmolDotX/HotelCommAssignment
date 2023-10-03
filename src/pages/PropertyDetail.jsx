import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContextProvider";

const PropertyDetail = () => {
  const { id } = useParams();
  const { selectedCityHotels } = useData();
  const [selectedHotel, setSelectedHotel] = useState({});

  useEffect(() => {
    const hotelSelectedById = selectedCityHotels.filter(
      (hotel) => hotel.id === id
    );
    setSelectedHotel(hotelSelectedById[0]);
  }, [selectedHotel]);

  console.log(selectedHotel);
  return (
    <section className='min-h-screen flex items-center justify-center bg-blue-50'>
      <div className='min-h-[70vh] min-w-[80%] flex items-center justify-between px-40 bg-blue-700 rounded-xl'>
        <div>
          <img
            className='h-96 rounded-lg shadow-blue-950 shadow-xl'
            src={selectedHotel?.image}
            alt={selectedHotel?.hotelName}
          />
        </div>
        <div className='h-96 flex flex-col gap-6 bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-xl p-5'>
          <h1 className='text-base font-semibold tracking-wider text-blue-50'>
            Hotel Name :{" "}
            <span className='font-bold text-xl text-white'>
              {selectedHotel?.hotelName}
            </span>
          </h1>
          <p className='text-base font-semibold flex gap-2 item-start tracking-wider text-blue-50'>
            Address :{" "}
            <span className='font-normal text-sm text-white opacity-90 flex flex-wrap max-w-sm'>
              {selectedHotel?.address}
            </span>
          </p>
          <p className='text-base font-semibold tracking-wider text-blue-50'>
            Pincode :{" "}
            <span className='font-normal text-xs text-white'>
              {selectedHotel?.pincode}
            </span>
          </p>
          <p className='text-base font-semibold tracking-wider text-blue-50'>
            Target :{" "}
            <span className='font-normal text-lg text-yellow-400 animate-pulse'>
              {selectedHotel?.target?.forSale ? "For Sale" : "For Rent"}
            </span>
          </p>
          <p className='text-base font-semibold tracking-wider text-blue-50'>
            Landmark :{" "}
            <span className='font-normal text-base text-white '>
              {selectedHotel?.landmark}
            </span>
          </p>
          <p className='text-base font-semibold tracking-wider text-blue-50'>
            Id :{" "}
            <span className='font-normal text-xs text-white'>
              {selectedHotel?.id}
            </span>
          </p>
          <p className='text-base font-semibold tracking-wider text-blue-50'>
            Price :{" "}
            <span className='font-bold text-lg text-green-600'>
              {selectedHotel?.price}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;
