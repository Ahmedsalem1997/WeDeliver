import { AiFillCar, AiFillClockCircle } from "react-icons/ai";
import { FaHandshake, FaHandHoldingUsd } from "react-icons/fa";
import { FormattedMessage } from "react-intl";

const HeroSection = () => {
  return (
    <div className="bg-dark mt-[-8rem] pt-[8rem]">
      <div className="container mx-auto px-8 lg:px-16 hero-backg pb-8 lg:pb-0">
        <div className="flex flex-col lg:w-1/2 min-h-[21rem]">
          <h2 className="text-white text-3xl font-bold text-center mt-16 lg:text-4xl lg:text-left lg:rtl:text-right leading-10">
            <FormattedMessage
              id="homePage.heroSection.heading"
              defaultMessage="homePage.heroSection.heading"
            />
          </h2>
          <p className="text-center lg:text-left lg:rtl:text-right text-gray-300 text-bold mt-8 lg:my-0 leading-relaxed">
            <FormattedMessage
              id="homePage.heroSection.subHeading"
              defaultMessage="homePage.heroSection.subHeading"
            />
          </p>
          <button className="p-4 w-56 text-sm font-semibold mx-auto lg:mx-0 text-white mt-12 bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
            <FormattedMessage
              id="homePage.heroSection.button"
              defaultMessage="homePage.heroSection.button"
            />
          </button>
        </div>
        <div className="lg:flex space-y-12 py-8 lg:py-10 lg:px-8 lg:space-y-0 lg:space-x-10 lg:mx-3 my-16 mb-8 lg:mt-16 bg-blurBg bg-blured rounded-xl">
          <div className="lg:w-1/4 lg:flex justify-center lg:space-s-3">
            <div className="hero-icon flex justify-center">
              <FaHandshake color="white" size={"44px"} />
            </div>
            <div className="hero-info">
              <p className="text-white text-lg font-bold text-center lg:text-left rtl:lg:text-right">
                <FormattedMessage
                  id="homePage.heroSection.feature1.title"
                  defaultMessage="homePage.heroSection.feature1.title"
                />
              </p>
              <p className="text-gray-400 text-sm text-center lg:text-left rtl:lg:text-right leading-relaxed lg:my-2">
                <FormattedMessage
                  id="homePage.heroSection.feature1.content"
                  defaultMessage="homePage.heroSection.feature1.content"
                />
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 lg:flex justify-center lg:space-s-3">
            <div className="hero-icon flex justify-center">
              <AiFillCar color="white" size={"44px"} />
            </div>
            <div className="hero-info">
              <p className="text-white text-lg font-bold text-center lg:text-left rtl:lg:text-right">
                <FormattedMessage
                  id="homePage.heroSection.feature2.title"
                  defaultMessage="homePage.heroSection.feature2.title"
                />
              </p>
              <p className="text-gray-400 text-sm text-center lg:text-left rtl:lg:text-right leading-relaxed lg:my-2">
                <FormattedMessage
                  id="homePage.heroSection.feature2.content"
                  defaultMessage="homePage.heroSection.feature2.content"
                />
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 lg:flex justify-center lg:space-s-3">
            <div className="hero-icon flex justify-center">
              <FaHandHoldingUsd color="white" size={"44px"} />
            </div>
            <div className="hero-info">
              <p className="text-white text-lg font-bold text-center lg:text-left rtl:lg:text-right">
                <FormattedMessage
                  id="homePage.heroSection.feature3.title"
                  defaultMessage="homePage.heroSection.feature3.title"
                />
              </p>
              <p className="text-gray-400 text-sm text-center lg:text-left rtl:lg:text-right leading-relaxed lg:my-2">
                <FormattedMessage
                  id="homePage.heroSection.feature3.content"
                  defaultMessage="homePage.heroSection.feature3.content"
                />
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 lg:flex justify-center lg:space-s-3">
            <div className="hero-icon flex justify-center">
              <AiFillClockCircle color="white" size={"44px"} />
            </div>
            <div className="hero-info">
              <p className="text-white text-lg font-bold text-center lg:text-left rtl:lg:text-right">
                <FormattedMessage
                  id="homePage.heroSection.feature4.title"
                  defaultMessage="homePage.heroSection.feature4.title"
                />
              </p>
              <p className="text-gray-400 text-sm text-center lg:text-left rtl:lg:text-right leading-relaxed lg:my-2">
                <FormattedMessage
                  id="homePage.heroSection.feature4.content"
                  defaultMessage="homePage.heroSection.feature4.content"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
