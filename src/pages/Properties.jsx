import React, { useEffect, useState } from "react";
import { useData } from "../contexts/DataContextProvider";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { CityHotels } from "../components";

const Properties = () => {
  const { allCities, setSelectedCity } = useData();
  const { city } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    navigate("/properties/newyork")
  },[])
  useEffect(() => {
    setSelectedCity(city);
  }, [city]);

  return (
    <section
      id='hotelProperties'
      className='min-h-screen flex flex-col gap-10 items-center bg-blue-50 py-10'
    >
      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-4xl font-semibold tracking-tight text-blue-900'>
          Featured Listed Property
        </h1>
        <p className='text-base font-normal text-blue-950 max-w-lg text-center'>
          The real state can be bought, sold, leased or rented, and can be
          valuable investment opportunity. The value of real state can be...
        </p>
      </div>

      <div className='flex flex-col w-full px-20'>
        <div className='flex items-center gap-12 w-full py-10'>
          {allCities?.map((city) => (
            <NavLink
              to={`${city}`}
              className={({ isActive }) =>
                isActive
                  ? `py-2 px-6 text-white font-semibold bg-blue-700 rounded-full hover:cursor-pointer`
                  : `py-2 px-6 text-blue-700 font-semibold bg-white border border-blue-700 rounded-full hover:cursor-pointer`
              }
              key={city}
            >
              {city}
            </NavLink>
          ))}
        </div>
        <div>
          <CityHotels />
        </div>
      </div>
    </section>
  );
};

export default Properties;
