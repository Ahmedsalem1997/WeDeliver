import Navbar from './../../layout/Navbar';

const HeroSection = () => {
  return (
    <div className="bg-dark">
      <Navbar />
      <div className="container mx-auto px-8 lg:px-16 hero-backg pb-8 lg:pb-0">
        <div className="flex flex-col lg:w-1/2">
          <h2 className="text-white text-3xl font-bold text-center mt-16 lg:text-4xl lg:text-left leading-10">
            Get behind the wheel and boost your income
          </h2>
          <p className="text-center lg:text-left text-gray-300 text-bold mt-8 lg:my-0">
            Join our growing fleet and enjoy the easiest way to be financially{" "}
            <br /> independent with a path to vehicle ownership at same time.
          </p>
          <button className="p-4 w-56 text-sm font-semibold mx-auto lg:mx-0 text-white mt-12 bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
            Start Earning Now
          </button>
        </div>
        <div className="lg:flex space-y-12 py-8 lg:space-y-0 lg:space-x-10 lg:p-12 my-16 mb-8 lg:mt-8 bg-blurBg bg-blured rounded">
          <div className="lg:w-1/4">
            <p className="text-white text-lg font-bold text-center lg:text-xl lg:text-left leading-10">
              Work With Multiple Clients
            </p>
            <p className="text-gray-400 text-bold text-center lg:text-left">
              Get paid through one platform
            </p>
          </div>
          <div className="lg:w-1/4">
            <p className="text-white text-lg font-bold text-center lg:text-xl lg:text-left leading-10">
              Access to Vehicle Financing
            </p>
            <p className="text-gray-400 text-bold text-center lg:text-left">
              Fast credit scoring decision within 48 hours
            </p>
          </div>
          <div className="lg:w-1/4">
            <p className="text-white text-lg font-bold text-center lg:text-xl lg:text-left leading-10">
              Easy Repayments
            </p>
            <p className="text-gray-400 text-bold text-center lg:text-left">
              Affordable financial services with path to ownership
            </p>
          </div>
          <div className="lg:w-1/4">
            <p className="text-white text-lg font-bold text-center lg:text-xl lg:text-left leading-10">
              Flexible working hours
            </p>
            <p className="text-gray-400 text-bold text-center lg:text-left">
              Get paid through one platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
