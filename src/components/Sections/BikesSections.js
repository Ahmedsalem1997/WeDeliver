import React, { useContext, useEffect } from "react";
import Vehicles from "../Vehicles";
import VehiclesContext from "../../context/vehicles/VehiclesContext";

const BikesSection = () => {
  const { filteredBikes, fetchVehicles } = useContext(VehiclesContext);

  useEffect(() => {
    fetchVehicles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <Vehicles cars={filteredBikes} />
    </div>
  );
};

export default BikesSection;
