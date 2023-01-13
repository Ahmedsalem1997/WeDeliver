import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { FormattedMessage } from "react-intl";

const DriveToOwn = () => {
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
            <select className="form-select navbar__language text-start bg-transparent border-0 text-black font-bold w-32">
              <option className="text-black" value={"en"}>
                <FormattedMessage
                  id="driveToOwn.country"
                  defaultMessage="driveToOwn.country"
                />
              </option>
            </select>
            <select className="form-select navbar__language text-start bg-transparent border-0 text-black font-bold w-32">
              <option className="text-black" value={"en"}>
                <FormattedMessage
                  id="driveToOwn.city"
                  defaultMessage="driveToOwn.city"
                />
              </option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="shadow-xl hover:shadow-md flex flex-col justify-between rounded-lg my-4 p-8 pt-0 h-80 w-80 transition ease-linear duration-200">
            <div className="card-heading">
              <p className="text-bold font-bold text-gray-800 text-left rtl:lg:text-right">
                Huyndai Accent
              </p>
              <p className="text-left rtl:lg:text-right text-gray-600">2018</p>
            </div>
            <div className="card-body">
              <img
                src={require(`../assets/images/dummyCar.png`)}
                className="icon-card__icon w-80 self-center my-8"
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
                <p className="text-gray-600 font-medium">Automatic</p>
              </div>
              <div>
                <div className="flex flex-col justify-center">
                  <img
                    src={require(`../assets/images/engine.png`)}
                    className="icon-card__icon self-center w-4"
                    alt="icon"
                  />
                  <p className="text-gray-600 font-medium">1.4L</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-center">
                  <img
                    src={require(`../assets/images/type.png`)}
                    className="icon-card__icon self-center w-4"
                    alt="icon"
                  />
                  <p className="text-gray-600 font-medium">Sedan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DriveToOwn;
