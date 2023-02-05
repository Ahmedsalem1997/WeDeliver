import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Tabs from "../Tabs";

const BoxesSection = () => {
  return (
      <div className="container mx-auto p-4 lg:pb-12">
        {/* tabs */}
        <Tabs />
        <h2 className="text-2xl font-bold text-center mt-16 lg:text-3xl leading-10 px-16">
          <FormattedMessage
            id="homePage.boxesSection.heading"
            defaultMessage="homePage.boxesSection.heading"
          />
        </h2>
        {/* Boxes */}
        <div className="lg:flex m-8 gap-x-8">
          <div className="icon-card flex flex-col justify-around lg:w-1/4 rounded-lg my-4 p-8 pt-0 h-[24rem]">
            <img
              src={require(`../../assets/images/Signup.png`)}
              className="icon-card__icon w-[8rem] self-center my-8"
              alt="icon"
            />
            <div>
              <h2 className="text-xl font-bold text-center lg:text-left lg:rtl:text-right lg:text-xl mb-4">
                <FormattedMessage
                  id="homePage.boxesSection.box1.title"
                  defaultMessage="homePage.boxesSection.box1.title"
                />
              </h2>
              <p className="leading-relaxed text-gray-600">
                <FormattedMessage
                  id="homePage.boxesSection.box1.content"
                  defaultMessage="homePage.boxesSection.box1.content"
                />
              </p>
            </div>
          </div>
          <div className="icon-card flex flex-col justify-around lg:w-1/4 rounded-lg my-4 p-8 pt-0 h-[24rem]">
            <img
              src={require(`../../assets/images/Verified.png`)}
              className="icon-card__icon w-[8rem] self-center my-8"
              alt="icon"
            />
            <div>
              <h2 className="text-xl font-bold text-center lg:text-left lg:rtl:text-right lg:text-xl mb-4">
                <FormattedMessage
                  id="homePage.boxesSection.box2.title"
                  defaultMessage="homePage.boxesSection.box2.title"
                />
              </h2>
              <p className="leading-relaxed text-gray-600 lg:rtl:text-right">
                <FormattedMessage
                  id="homePage.boxesSection.box2.content"
                  defaultMessage="homePage.boxesSection.box2.content"
                />
              </p>
            </div>
          </div>
          <div className="icon-card flex flex-col justify-around lg:w-1/4 rounded-lg my-4 p-8 pt-0 h-[24rem]">
            <img
              src={require(`../../assets/images/Verified-1.png`)}
              className="icon-card__icon w-[8rem] self-center my-8"
              alt="icon"
            />
            <div>
              <h2 className="text-xl font-bold text-center lg:text-left lg:rtl:text-right lg:text-xl mb-4">
                <FormattedMessage
                  id="homePage.boxesSection.box3.title"
                  defaultMessage="homePage.boxesSection.box3.title"
                />
              </h2>
              <p className="leading-relaxed text-gray-600 lg:rtl:text-right">
                <FormattedMessage
                  id="homePage.boxesSection.box3.content"
                  defaultMessage="homePage.boxesSection.box3.content"
                />
              </p>
            </div>
          </div>
          <div className="icon-card flex flex-col justify-around lg:w-1/4 rounded-lg  my-4 p-8 pt-0 h-[24rem]">
            <img
              src={require(`../../assets/images/drive-own.png`)}
              className="icon-card__icon w-[8rem] self-center my-8"
              alt="icon"
            />
            <div>
              <h2 className="text-xl font-bold text-center lg:text-left lg:rtl:text-right lg:text-xl mb-4">
                <FormattedMessage
                  id="homePage.boxesSection.box4.title"
                  defaultMessage="homePage.boxesSection.box4.title"
                />
              </h2>
              <p className="leading-relaxed text-gray-600 lg:rtl:text-right">
                <FormattedMessage
                  id="homePage.boxesSection.box4.content"
                  defaultMessage="homePage.boxesSection.box4.content"
                />
              </p>
            </div>
          </div>
        </div>
        {/* choose your vehicle */}
        <div className="car-gradient-box lg:flex rounded-xl lg:px-12 px-8 justify-between m-4 lg:mx-16 py-4 lg:h-80">
          <div className="lg:w-1/2 self-center">
            <h2 className="text-white text-center text-3xl font-bold mt-8 lg:text-5xl lg:text-left lg:rtl:text-right">
              <FormattedMessage
                id="homePage.boxesSection.chooseBox.title"
                defaultMessage="homePage.boxesSection.chooseBox.title"
              />
            </h2>
            <p className="text-white text-center my-4 lg:text-left lg:rtl:text-right">
              <FormattedMessage
                id="homePage.boxesSection.chooseBox.content"
                defaultMessage="homePage.boxesSection.chooseBox.content"
              />
            </p>
            <Link to="/DriveToOwn" className="p-4 w-full text-sm font-semibold text-white my-4 bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
              <FormattedMessage
                id="homePage.boxesSection.chooseBox.button"
                defaultMessage="homePage.boxesSection.chooseBox.button"
              />
            </Link>
          </div>
          <div className="lg:w-1/3 self-center">
            <img src={require(`../../assets/images/aa.png`)} alt="Car" />
          </div>
        </div>
      </div>
  );
};

export default BoxesSection;
