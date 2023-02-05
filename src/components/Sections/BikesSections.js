import React, { useContext, useEffect } from "react";
import Vehicles from "../Vehicles";
import VehiclesContext from "../../context/vehicles/VehiclesContext";

const BikesSection = () => {
  const { filteredBikes, fetchVehicles } = useContext(VehiclesContext);

  useEffect(() => {
    fetchVehicles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredBikes]);
  
  return (
    <div className="lg:flex lg:justify-between">
      <Vehicles cars={filteredBikes} />
    </div>
  );
};

export default BikesSection;
