import React, { createContext, useState } from 'react';

const VehiclesContext = createContext();

export const VehiclesProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [bikes, setBikes] = useState([]);
    const [filteredBikes, setFilteredBikes] = useState([]);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [countryId, setCountryId] = useState();
    const [cityId, setCityId] = useState();
    const [filteredCars, setFilteredCars] = useState(cars);

    const fetchVehicles = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "filters": {},
                "page": null,
                "per_page": null,
                "order_by": "asc"
            }
            )
        }
        fetch('https://fintech.services.wedeliverapp.com/api/v1/public/vehicles', requestOptions)
            .then(response => response.json())
            .then(items => {
                setCars(items.data.cars);
                setBikes(items.data.bikes);
                setFilteredBikes(items.data.bikes)
                setFilteredCars(items.data.cars);
            });

    }

    const fetchCountries = () => {
        fetch('https://fintech.services.wedeliverapp.com/api/v1/countries')
            .then(response => response.json())
            .then(data => setCountries(data))
    }

    const fetchCities = () => {
        if (countryId) {
            fetch(`https://fintech.services.wedeliverapp.com/api/v1/cities/${countryId}`)
                .then(response => response.json())
                .then(data => setCities(data))
        }
    }

    const filterVechiles = () => {
        setFilteredCars(cars.filter(car => car.country_id === countryId && car.city_id === cityId));

    }

    const countryChangeHandler = (e) => {
        setCountryId(e.target.value);
        fetchCities();
    }

    const cityChangehandler = (e) => {
        setCityId(e.target.value);
        filterVechiles();
    }

    return <VehiclesContext.Provider value={{
        cars,
        countries,
        cities,
        filteredCars,
        countryId,
        bikes, 
        filteredBikes,
        fetchVehicles,
        fetchCountries,
        fetchCities,
        countryChangeHandler,
        cityChangehandler

    }}>
        {children}
    </VehiclesContext.Provider>
}

export default VehiclesContext;