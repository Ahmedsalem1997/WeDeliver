import React, { useEffect, useState } from "react";
import Vehicles from "../Vehicles";
import { getVehiclesResponse } from "../../providers/Service";

const CarsSection = () => {
  const [loading, setLoading] = useState(true)
  const [cars, setCars] = useState([]);

  const getCarsData = () => {
    getVehiclesResponse().then((res) => {
      if(!res.httpError) { 
        setCars(res.data.cars)
        setLoading(false)
      }
    })
  }

  useEffect(() => {
    getCarsData()
  }, [])
  
  return (
    <div className="lg:flex lg:justify-between">
      <Vehicles cars={cars} loading={loading}/>  
    </div>
  );
};

export default CarsSection;
