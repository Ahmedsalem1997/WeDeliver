import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { FormattedMessage } from "react-intl";
import { useEffect, useContext } from "react";
import VehiclesContext from "../context/vehicles/VehiclesContext";
import CarsSection from "../components/Sections/CarsSection";
import BikesSection from "../components/Sections/BikesSections";
import DriveWithUs from "../components/Sections/DriveWithUs";

const DriveToOwn = () => {
  const {
    countries,
    countryId,
    cities,
    fetchCountries,
    fetchCities,
    countryChangeHandler,
    cityChangehandler,
  } = useContext(VehiclesContext);

  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryId]);

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
      <section className="cars-view container mx-auto px-8 lg:px-20">
        <div className="lg:flex my-8 justify-between">
          <h3 className="font-bold text-gray-900 text-left rtl:lg:text-right lg:text-2xl">
            <FormattedMessage id="driveToOwn.cars" defaultMessage="Cars" />
          </h3>
          <div className="lg:flex lg:justify-between lg:space-s-5 items-center">
            <select
              onChange={(e) => countryChangeHandler(e)}
              defaultValue="country"
              className="form-select navbar__language text-start bg-transparent border-0 text-black font-bold w-64 border-b-2 py-2"
            >
              <option className="text-black" value={"country"} disabled>
                <FormattedMessage id="driveToOwn.country"></FormattedMessage>
              </option>
              {countries.map((country) => (
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
              onChange={(e) => cityChangehandler(e)}
              defaultValue="city"
              className="form-select navbar__language text-start bg-transparent border-0 text-black font-bold w-64 border-b-2 py-2"
            >
              <option className="text-black" value={"city"} disabled>
                <FormattedMessage id="driveToOwn.city"></FormattedMessage>
              </option>
              {cities.map((city) => (
                <option className="text-black" value={city.id} key={city.id}>
                  {city.name_en}
                </option>
              ))}
            </select>
          </div>
        </div>
        <CarsSection />
        <div className="my-4 mb-8">
          <h3 className="font-bold text-gray-900 text-left rtl:lg:text-right lg:text-2xl mt-14 mb-8">
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
