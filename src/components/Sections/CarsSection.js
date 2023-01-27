import React, { useContext, useEffect } from "react";
import Vehicles from "../Vehicles";
import VehiclesContext from "../../context/vehicles/VehiclesContext";

const CarsSection = () => {
  const { filteredCars, fetchVehicles } = useContext(VehiclesContext);

  useEffect(() => {
    fetchVehicles();
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <Vehicles cars={filteredCars} />
    </div>
  );
};

export default CarsSection;
