const InfoSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 mt-[-2rem] mb-8 lg:my-16">
        <div className="background-wedeliver rounded-t-xl h-[18rem] lg:h-[34rem]"></div>
        <div className="lg:flex">
          <div className="group lg:w-1/4 bg-gray-50 p-8 h-[19rem] lg:rounded-bl-2xl hover:bg-mainOrange transition ease-linear duration-200">
            <h2 className="text-center lg:text-left text-xl lg:text-2xl font-bold my-4 group-hover:text-white">
              Women Empowrment
            </h2>
            <p className="text-center lg:text-left text-gray-600 leading-relaxed group-hover:text-white">
              We are committed to helping women become successful business
              owners and to be self-sufficient.
            </p>
          </div>
          <div className="group lg:w-1/4 bg-gray-100 p-8 h-[19rem] hover:bg-mainOrange transition ease-linear duration-200">
            <h2 className="text-center lg:text-left text-xl lg:text-2xl font-bold my-4 group-hover:text-white">
              Environmentally friendly
            </h2>
            <p className="text-center lg:text-left text-gray-600 leading-relaxed group-hover:text-white">
              Our commitment to building a productive hybrid and electric fleet
              in the world, and positively contributing to a more sustainable
              world.
            </p>
          </div>
          <div className="group lg:w-1/4 bg-gray-200 p-8 h-[19rem] hover:bg-mainOrange transition ease-linear duration-200">
            <h2 className="text-center lg:text-left text-xl lg:text-2xl font-bold my-4 group-hover:text-white">
              Financial independency
            </h2>
            <p className="text-center lg:text-left text-gray-600 leading-relaxed group-hover:text-white">
              With our financial solution, captains can access vehicle
              financing, thus allowing them to be more productive and
              financially independent.
            </p>
          </div>
          <div className="group lg:w-1/4 bg-gray-300 p-8 h-[19rem] rounded-b-2xl lg:rounded-br-2xl lg:rounded-bl-none hover:bg-mainOrange transition ease-linear duration-200">
            <h2 className="text-center lg:text-left text-xl lg:text-2xl font-bold my-4 group-hover:text-white">
              Sustainability
            </h2>
            <p className="text-center lg:text-left text-gray-600 leading-relaxed group-hover:text-white">
              Our ultimate goal is to achieve sustainability through maintaining
              the quality of our services and establishing a high-quality
              partnership with high reliability.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
