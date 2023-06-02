import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import CarsSection from "../components/Sections/CarsSection";
import BikesSection from "../components/Sections/BikesSections";
import DriveWithUs from "../components/Sections/DriveWithUs";
import { getCities, getCountries } from "../providers/Service";

const DriveToOwn = () => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const fetchCountries = (id) => {
    getCountries(id).then((res) => {
      if(!res.httpError) {
        setCountryOptions(res);
      }
    });
  };

  useEffect(() => {
    fetchCountries()
  }, [])

  
  const handleCountryChange = (e) => {
    fetchCities(e.target.value);
  }

  const fetchCities = (id) => {
    getCities(id).then((res) => {
      if(!res.httpError) {
        setCityOptions(res);
        
      }
    });
  };

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
      <section className="cars-view container mx-auto px-5 lg:px-20">
        <div className="flex max-[600px]:flex-col-reverse my-4 lg:my-8 justify-between">
          <h3 className="category-title">
            <FormattedMessage id="driveToOwn.cars" defaultMessage="Cars" />
          </h3>
          <div className="flex lg:justify-between space-s-5 items-center">
            <select
              // onChange={(e) => console.log(e.target.value)}
              onChange={handleCountryChange}
              defaultValue="country"
              className="form-select navbar__language text-start bg-transparent border-0 text-black font-bold w-64 border-b-2 py-2"
            >
              <option className="text-black" value={"country"} disabled>
                <FormattedMessage id="driveToOwn.country"></FormattedMessage>
              </option>
              {countryOptions && countryOptions.map((country) => (
                <option
                  className="text-black"
                  value={country.id}
                  key={country.id}
                >
                  {country.name_en}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => console.log(e)}
              defaultValue="city"
              className="form-select navbar__language text-start bg-transparent border-0 text-black font-bold w-64 border-b-2 py-2"
            >
              <option className="text-black" value={"city"} disabled>
                <FormattedMessage id="driveToOwn.city"></FormattedMessage>
              </option>
              {cityOptions && cityOptions.map((city) => (
                <option className="text-black" value={city.id} key={city.id}>
                  {city.name_en}
                </option>
              ))}
            </select>
          </div>
        </div>
        <CarsSection />
        <div className="my-8">
          <h3 className="category-title">
            <FormattedMessage id="driveToOwn.bikes" defaultMessage="Bikes" />
          </h3>
          <BikesSection />
        </div>
      </section>
      <DriveWithUs />
      <Footer />
    </>
  );
};

export default DriveToOwn;
