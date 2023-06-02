import React, { useState, useEffect } from "react";
import { getVehiclesResponse } from "../../providers/Service";
import Vehicles from "../Vehicles";

const BikesSection = () => {
  const [loading, setLoading] = useState(true)
  const [bikes, setBikes] = useState([]);

  const getBikesData = () => {
    getVehiclesResponse().then((res) => {
      if(!res.httpError) { 
        setBikes(res.data.bikes)
        setLoading(false)
      }
    })
  }

  useEffect(() => {
    getBikesData()
  }, [])
  
  return (
    <div className="lg:flex lg:justify-between">
      <Vehicles cars={bikes} loading={loading}/>
    </div>
  );
};

export default BikesSection;
