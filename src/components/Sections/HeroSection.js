import { useState, useEffect } from "react";
import { AiFillCar, AiFillClockCircle } from "react-icons/ai";
import { FaHandshake, FaHandHoldingUsd } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import bg1 from "../../assets/images/P1.png";
import bg2 from "../../assets/images/P2.png";
import bg3 from "../../assets/images/P3.png";
import bg4 from "../../assets/images/P4.png";
import AnimatedFadeIn from "../Animated/AnimatedFadeIn";
import AnimatedFromBottom from "../Animated/AnimatedFromBottom";
import AnimatedFromLeft from "../Animated/AnimatedFromLeft";

const HeroSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  let images_array = [bg1, bg2, bg3, bg4];

  function getRandomImage() {
    let random_index = Math.floor(Math.random() * images_array.length);
    setSelectedImage(images_array[random_index]);
  }

  useEffect(() => {
    getRandomImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-dark">
      <section className="container lg:flex mx-auto px-8 lg:px-20 pb-8 lg:pb-0 lg:h-[90vh]">
        <div className="lg:flex justify-between">
          <div className="flex flex-col lg:w-1/2 min-h-[21rem]">
            <AnimatedFromLeft>
              <h2 className="text-white text-3xl font-bold text-center mt-16 lg:text-4xl lg:text-left lg:rtl:text-right leading-10">
                <FormattedMessage
                  id="homePage.heroSection.heading"
                  defaultMessage="homePage.heroSection.heading"
                />
              </h2>
            </AnimatedFromLeft>
            <AnimatedFromLeft>
              <p className="text-center lg:text-left lg:rtl:text-right text-gray-300 text-bold mt-8 lg:my-0 leading-relaxed">
                <FormattedMessage
                  id="homePage.heroSection.subHeading"
                  defaultMessage="homePage.heroSection.subHeading"
                />
              </p>
            </AnimatedFromLeft>
            <AnimatedFadeIn>
              <button className="p-4 w-56 text-sm font-semibold mx-auto lg:mx-0 text-white mt-12 bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
                <FormattedMessage
                  id="homePage.heroSection.button"
                  defaultMessage="homePage.heroSection.button"
                />
              </button>
            </AnimatedFadeIn>
          </div>
          <img
            src={selectedImage}
            className="relative hidden lg:block"
            alt="WeDeliver"
          />
        </div>
        <div className="lg:flex space-y-12 py-8 lg:py-12 lg:px-24 lg:space-y-0 lg:space-x-10 lg:mx-16 my-16 mb-8 lg:mt-16 bg-blurBg bg-blured rounded-xl lg:absolute lg:bottom-6 lg:w-100 lg:left-0 lg:right-0">
          <div className="lg:w-1/4 lg:flex justify-center lg:space-s-3">
            <div className="hero-icon flex justify-center">
              <AnimatedFadeIn>
                <FaHandshake color="white" size={"44px"} />
              </AnimatedFadeIn>
            </div>
            <div className="hero-info">
              <AnimatedFromBottom>
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
              </AnimatedFromBottom>
            </div>
          </div>
          <div className="lg:w-1/4 lg:flex justify-center lg:space-s-3">
            <div className="hero-icon flex justify-center">
              <AnimatedFadeIn>
                <AiFillCar color="white" size={"44px"} />
              </AnimatedFadeIn>
            </div>
            <div className="hero-info">
              <AnimatedFromBottom>
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
              </AnimatedFromBottom>
            </div>
          </div>

          <div className="lg:w-1/4 lg:flex justify-center lg:space-s-3">
            <div className="hero-icon flex justify-center">
              <AnimatedFadeIn>
                <FaHandHoldingUsd color="white" size={"44px"} />
              </AnimatedFadeIn>
            </div>
            <div className="hero-info">
              <AnimatedFromBottom>
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
              </AnimatedFromBottom>
            </div>
          </div>
          <div className="lg:w-1/4 lg:flex justify-center lg:space-s-3">
            <div className="hero-icon flex justify-center">
              <AnimatedFadeIn>
                <AiFillClockCircle color="white" size={"44px"} />
              </AnimatedFadeIn>
            </div>
            <div className="hero-info">
              <AnimatedFromBottom>
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
              </AnimatedFromBottom>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default HeroSection;
