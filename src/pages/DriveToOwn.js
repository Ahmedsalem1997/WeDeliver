import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";

const DriveToOwn = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [cars, setCars] = useState([]);
  const [countryId, setCountryId] = useState(195);
  const [cityId, setCityId] = useState(3);

  useEffect(() => {
    fetch('https://fintech.services.wedeliverapp.com/api/v1/countries')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(console.log("error in api call"))
  }, []);

  const countryChangeHandler = (e) => {
    setCountryId(e.target.value);
    fetch(`https://fintech.services.wedeliverapp.com/api/v1/cities/${countryId}`)
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(console.log("error in api call"))
  }

  const cityChangehandler = (e) => {
    setCityId(e.target.value);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "filters":
        {
          "country_id":
          {
            "filterType": "int",
            "filterValue": countryId,
            "filterOperator": "="
          },
          "city_id":
          {
            "filterType": "int",
            "filterValue": cityId,
            "filterOperator": "="
          }

        },
        "page": null,
        "per_page": null,
        "order_by": "asc"
      }
      )
    };
    fetch('https://fintech.services.wedeliverapp.com/api/v1/public/vehicles', requestOptions)
      .then(response => response.json())
      .then(items => setCars(items.data.cars));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "filters":
        {
        },
        "page": null,
        "per_page": null,
        "order_by": "asc"
      }
      )
    };
    fetch('https://fintech.services.wedeliverapp.com/api/v1/public/vehicles', requestOptions)
      .then(response => response.json())
      .then(items => setCars(items.data.cars));
  }, []);



  return (
    <>
      <Navbar />
      <div className="drive-section gradientOrange pt-10">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-4 lg:text-4xl leading-10">
          <FormattedMessage
            id="driveToOwn.heading"
            defaultMessage="driveToOwn.heading"
          />
        </h2>
        <p className="text-gray-600 text-center">
          <FormattedMessage
            id="driveToOwn.subHeading"
            defaultMessage="driveToOwn.subHeading"
          />
        </p>
      </div>
      <div className="cars-view container mx-auto px-8 lg:px-16">
        <div className="flex my-8 justify-between">
          <h3 className="font-bold text-gray-900 text-left rtl:lg:text-right lg:text-2xl">
            <FormattedMessage
              id="driveToOwn.cars"
              defaultMessage="driveToOwn.cars"
            />
          </h3>
          <div className="flex justify-between space-s-5">
            <select
              onChange={countryChangeHandler}
              defaultValue="country"
              className="form-select navbar__language text-start bg-transparent border-0 text-black font-bold w-32"
            >
              <option className="text-black" value={"country"} disabled>
                <FormattedMessage id="driveToOwn.country"></FormattedMessage>
              </option>
              {countries.map((country) => (
                <option className="text-black" value={country.id} key={country.id}>{country.name_en}</option>
              ))}
            </select>
            <select onChange={cityChangehandler} defaultValue="city" className="form-select navbar__language text-start bg-transparent border-0 text-black font-bold w-32">
              <option className="text-black" value={"city"} disabled>
                <FormattedMessage id="driveToOwn.city"></FormattedMessage>
              </option>
              {cities.map((city) => (
                <option className="text-black" value={city.id} key={city.id}>{city.name_en}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cars.map((vehicle) => (
            <div className="shadow-xl hover:shadow-md flex flex-col justify-between rounded-md my-4 p-8 pt-0 h-80 w-full transition ease-linear duration-200" key={vehicle.id}>
              <div className="card-heading">
                <p className="text-bold font-bold text-gray-800 text-left rtl:lg:text-right">
                  {vehicle.vehicle.manufacturer_model.manufacturer.manufacturer_name_en} {vehicle.vehicle.manufacturer_model.manufacturer_model_name_ar}
                </p>
                <p className="text-left rtl:lg:text-right text-gray-600">{vehicle.vehicle.production_year}</p>
              </div>
              <div className="card-body flex justify-center">
                <img
                  src={vehicle.vehicle.main_image.url}
                  className="icon-card__icon max-h-[150px] self-center my-8"
                  alt="carimage"
                />
              </div>
              <div className="card-info flex justify-between">
                <div className="flex flex-col justify-center">
                  <img
                    src={require(`../assets/images/transmission.png`)}
                    className="icon-card__icon self-center w-4"
                    alt="icon"
                  />
                  <p className="text-gray-600 font-medium">{vehicle.vehicle.transmission_obj.Value}</p>
                </div>
                <div>
                  <div className="flex flex-col justify-center">
                    <img
                      src={require(`../assets/images/engine.png`)}
                      className="icon-card__icon self-center w-4"
                      alt="icon"
                    />
                    <p className="text-gray-600 font-medium">{vehicle.vehicle.engine_size_obj.Value}</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col justify-center">
                    <img
                      src={require(`../assets/images/type.png`)}
                      className="icon-card__icon self-center w-4"
                      alt="icon"
                    />
                    <p className="text-gray-600 font-medium">{vehicle.vehicle_body_form.transport_type_name_en}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DriveToOwn;
