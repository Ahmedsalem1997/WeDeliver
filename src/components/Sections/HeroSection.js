import { useState, useEffect } from "react";
import { AiFillCar, AiFillClockCircle } from "react-icons/ai";
import { FaHandshake, FaHandHoldingUsd } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import bg1 from "../../assets/images/P1.png";
import bg2 from "../../assets/images/P2.png";
import bg4 from "../../assets/images/P4.png";
import AnimatedFadeIn from "../Animated/AnimatedFadeIn";
import AnimatedFromBottom from "../Animated/AnimatedFromBottom";
import AnimatedFromLeft from "../Animated/AnimatedFromLeft";

const HeroSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  let images_array = [bg1, bg2, bg4];

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
      <section className="container xl:flex justify-between mx-auto px-8 xl:px-20 pb-8 xl:pb-0 xl:h-[90vh]">
        <div className="xl:flex w-full justify-between">
          <div className="flex flex-col xl:w-1/2 min-h-[21rem]">
            <AnimatedFromLeft>
              <h2 className="text-white text-3xl font-bold text-center mt-16 xl:text-4xl xl:text-left xl:rtl:text-right leading-10">
                <FormattedMessage
                  id="homePage.heroSection.heading"
                  defaultMessage="homePage.heroSection.heading"
                />
              </h2>
            </AnimatedFromLeft>
            <AnimatedFromLeft>
              <p className="text-center xl:text-left xl:rtl:text-right text-gray-300 text-bold mt-8 xl:my-0 leading-relaxed">
                <FormattedMessage
                  id="homePage.heroSection.subHeading"
                  defaultMessage="homePage.heroSection.subHeading"
                />
              </p>
            </AnimatedFromLeft>
            <button className="p-4 w-56 text-sm font-semibold mx-auto xl:mx-0 text-white mt-12 bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
              <FormattedMessage
                id="homePage.heroSection.button"
                defaultMessage="homePage.heroSection.button"
              />
            </button>
          </div>
          <img
            src={selectedImage}
            className="relative hidden xl:block"
            alt="WeDeliver"
          />
        </div>
        <div className="xl:flex space-y-12 py-8 xl:py-12 xl:px-24 xl:space-y-0 xl:space-s-10 xl:mx-24 my-16 mb-8 xl:mt-16 bg-blurBg bg-blured rounded-xl xl:absolute xl:bottom-6 xl:w-100 xl:left-0 xl:right-0">
          <div className="xl:w-1/4 xl:flex justify-center xl:space-s-3">
            <div className="hero-icon flex justify-center">
              <AnimatedFadeIn>
                <FaHandshake color="white" size={"44px"} />
              </AnimatedFadeIn>
            </div>
            <div className="hero-info">
              <AnimatedFromBottom>
                <p className="text-white text-lg font-bold text-center xl:text-left rtl:xl:text-right">
                  <FormattedMessage
                    id="homePage.heroSection.feature1.title"
                    defaultMessage="homePage.heroSection.feature1.title"
                  />
                </p>
                <p className="text-gray-400 text-sm text-center xl:text-left rtl:xl:text-right leading-relaxed xl:my-2">
                  <FormattedMessage
                    id="homePage.heroSection.feature1.content"
                    defaultMessage="homePage.heroSection.feature1.content"
                  />
                </p>
              </AnimatedFromBottom>
            </div>
          </div>
          <div className="xl:w-1/4 xl:flex justify-center xl:space-s-3">
            <div className="hero-icon flex justify-center">
              <AnimatedFadeIn>
                <AiFillCar color="white" size={"44px"} />
              </AnimatedFadeIn>
            </div>
            <div className="hero-info">
              <AnimatedFromBottom>
                <p className="text-white text-lg font-bold text-center xl:text-left rtl:xl:text-right">
                  <FormattedMessage
                    id="homePage.heroSection.feature2.title"
                    defaultMessage="homePage.heroSection.feature2.title"
                  />
                </p>
                <p className="text-gray-400 text-sm text-center xl:text-left rtl:xl:text-right leading-relaxed xl:my-2">
                  <FormattedMessage
                    id="homePage.heroSection.feature2.content"
                    defaultMessage="homePage.heroSection.feature2.content"
                  />
                </p>
              </AnimatedFromBottom>
            </div>
          </div>
          <div className="xl:w-1/4 xl:flex justify-center xl:space-s-3">
            <div className="hero-icon flex justify-center">
              <AnimatedFadeIn>
                <FaHandHoldingUsd color="white" size={"44px"} />
              </AnimatedFadeIn>
            </div>
            <div className="hero-info">
              <AnimatedFromBottom>
                <p className="text-white text-lg font-bold text-center xl:text-left rtl:xl:text-right">
                  <FormattedMessage
                    id="homePage.heroSection.feature3.title"
                    defaultMessage="homePage.heroSection.feature3.title"
                  />
                </p>
                <p className="text-gray-400 text-sm text-center xl:text-left rtl:xl:text-right leading-relaxed xl:my-2">
                  <FormattedMessage
                    id="homePage.heroSection.feature3.content"
                    defaultMessage="homePage.heroSection.feature3.content"
                  />
                </p>
              </AnimatedFromBottom>
            </div>
          </div>
          <div className="xl:w-1/4 xl:flex justify-center xl:space-s-3">
            <div className="hero-icon flex justify-center">
              <AnimatedFadeIn>
                <AiFillClockCircle color="white" size={"44px"} />
              </AnimatedFadeIn>
            </div>
            <div className="hero-info">
              <AnimatedFromBottom>
                <p className="text-white text-lg font-bold text-center xl:text-left rtl:xl:text-right">
                  <FormattedMessage
                    id="homePage.heroSection.feature4.title"
                    defaultMessage="homePage.heroSection.feature4.title"
                  />
                </p>
                <p className="text-gray-400 text-sm text-center xl:text-left rtl:xl:text-right leading-relaxed xl:my-2">
                  <FormattedMessage
                    id="homePage.heroSection.feature4.content"
                    defaultMessage="homePage.heroSection.feature4.content"
                  />
                </p>
              </AnimatedFromBottom>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
