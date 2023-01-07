const InfoSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 mt-[-2rem] mb-8 lg:my-16">
        <div className="background-wedeliver rounded-t-xl h-[18rem] lg:h-[34rem]"></div>
        <div className="lg:flex">
          <div className="lg:w-1/4 bg-gray-50 p-8 h-[19rem] lg:rounded-bl-2xl">
            <h2 className="text-center lg:text-left text-xl lg:text-2xl font-bold my-4">
              Women Empowrment
            </h2>
            <p className="text-center lg:text-left text-gray-600 leading-relaxed">
              We are committed to helping women become successful business
              owners and to be self-sufficient.
            </p>
          </div>
          <div className="lg:w-1/4 bg-gray-100 p-8 h-[19rem]">
            <h2 className="text-center lg:text-left text-xl lg:text-2xl font-bold my-4">
              Environmentally friendly
            </h2>
            <p className="text-center lg:text-left text-gray-600 leading-relaxed">
              Our commitment to building a productive hybrid and electric fleet
              in the world, and positively contributing to a more sustainable
              world.
            </p>
          </div>
          <div className="lg:w-1/4 bg-gray-200 p-8 h-[19rem]">
            <h2 className="text-center lg:text-left text-xl lg:text-2xl font-bold my-4">
              Financial independency
            </h2>
            <p className="text-center lg:text-left text-gray-600 leading-relaxed">
              With our financial solution, captains can access vehicle
              financing, thus allowing them to be more productive and
              financially independent.
            </p>
          </div>
          <div className="lg:w-1/4 bg-gray-300 p-8 h-[19rem] rounded-b-2xl lg:rounded-br-2xl lg:rounded-bl-none">
            <h2 className="text-center lg:text-left text-xl lg:text-2xl font-bold my-4">
              Sustainability
            </h2>
            <p className="text-center lg:text-left text-gray-600 leading-relaxed">
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
