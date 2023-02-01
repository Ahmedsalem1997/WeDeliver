import React, { useContext, useEffect } from "react";
import Vehicles from "../Vehicles";
import VehiclesContext from "../../context/vehicles/VehiclesContext";

const CarsSection = () => {
  const { filteredCars, fetchVehicles } = useContext(VehiclesContext);

  useEffect(() => {
    fetchVehicles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="lg:flex lg:justify-between">
      <Vehicles cars={filteredCars} />  
    </div>
  );
};

export default CarsSection;
