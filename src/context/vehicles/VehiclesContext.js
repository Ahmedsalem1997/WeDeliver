import React, { createContext, useState } from "react";

const VehiclesContext = createContext();

export const VehiclesProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryId, setCountryId] = useState();
  const [cityId, setCityId] = useState();
  const [loading, setLoading] = useState(true);
  const [filteredCars, setFilteredCars] = useState(cars);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };


  const fetchVehicles = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filters: {},
        page: null,
        per_page: null,
        order_by: "asc",
      }),
    };
    fetch(
      "https://fintech.services.wedeliverapp.com/api/v1/public/vehicles",
      requestOptions
    )
      .then((response) => response.json())
      .then((items) => {
        setCars(items.data.cars);
        setFilteredCars(items.data.cars);
        setBikes(items.data.bikes);
        setFilteredBikes(items.data.bikes);
        setLoading(false);
      });
  };

  const fetchCountries = () => {
    fetch(
      "https://fintech.services.wedeliverapp.com/api/v1/countries/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCountries(result);
      })
      .catch((error) => console.log("error", error));
  };

  const fetchCities = () => {
    if (countryId) {
      fetch(
        `https://fintech.services.wedeliverapp.com/api/v1/cities/${countryId}`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setCities(data)
        });
    }
  };

  const filterVechiles = () => {
    setFilteredCars(
      cars.filter(
        (car) => car.country_id === countryId && car.city_id === cityId
      )
    );
    console.log(cars);
    console.log(filteredCars);
    setFilteredBikes(
      bikes.filter(
        (bike) => bike.country_id === countryId && bike.city_id === cityId
      )
    )
  };

  const countryChangeHandler = (e) => {
    setCountryId(e.target.value);
    fetchCities();
  };

  const cityChangehandler = (e) => {
    setCityId(e.target.value);
    filterVechiles();
  };

  return (
    <VehiclesContext.Provider
      value={{
        cars,
        countries,
        cities,
        filteredCars,
        countryId,
        cityId,
        loading,
        bikes,
        filteredBikes,
        fetchVehicles,
        fetchCountries,
        fetchCities,
        countryChangeHandler,
        cityChangehandler,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};

export default VehiclesContext;
