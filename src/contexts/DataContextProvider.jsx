import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [hotelData, setHotelData] = useState({});
  const [allCities, setAllCities] = useState([]);
  const [errorFetchingData, setErrorFetchingData] = useState("");
  const [selectedCity, setSelectedCity] = useState("mumbai");
  const [selectedCityHotels, setSelectedCityHotels] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/hotelData");
      setHotelData(data);
    } catch (error) {
      setErrorFetchingData(error.message);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

 useEffect(()=>{
    if (hotelData && hotelData.cities) {
      setAllCities(Object.keys(hotelData?.cities));
    }
 },[hotelData])
 
 useEffect(()=>{
   if(hotelData && hotelData?.cities) {
    setSelectedCityHotels(hotelData?.cities[selectedCity])
  }
 },[selectedCity])

 

  return (
    <DataContext.Provider
      value={{
        hotelData,
        errorFetchingData,
        selectedCity,
        setSelectedCity,
        allCities,
        selectedCityHotels,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
export default DataContextProvider;
