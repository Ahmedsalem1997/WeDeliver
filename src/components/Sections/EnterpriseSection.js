const EnterpriseSection = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="container mx-auto justify-around lg:px-8 px-4 lg:flex pt-16 pb-4">
          <div className="lg:w-1/2 self-center my-8">
            <img
              src={require(`../../assets/images/enterprise.jpg`)}
              alt="Car"
            />
          </div>
          <div className="flex flex-col lg:w-2/5 self-center">
            <h2 className="text-center text-gray-300 text-xl my-4 font-bold lg:text-xl lg:text-left">
              Enterprise?
            </h2>
            <h2 className="text-center text-white text-xl font-bold lg:text-3xl lg:text-left leading-10">
              Enjoy our Fleet-As-A-Solution
            </h2>
            <p className="text-gray-300 text-bold">
              Join our growing fleet and enjoy the easiest way to be financially{" "}
              <br /> independent with a path to vehicle ownership at same time.
            </p>
            <button className="p-4 w-100 text-sm font-semibold text-white mt-12 bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
              Expand Your Fleet
            </button>
          </div>
        </div>
        <div className="partners-section grid grid-cols-2 lg:grid-cols-6 gap-x-16 gap-y-12 container px-8 lg:px-16 mx-auto pb-16">
          <div className="w-1/6 self-center items-center">
            <img
              src={require(`../../assets/images/logos/amazon.png`)}
              className="max-w-[9rem]"
              alt="Car"
            />
          </div>
          <div className="w-1/6 self-center">
            <img src={require(`../../assets/images/logos/kfc.png`)} className="max-w-[9rem]" alt="Car" />
          </div>
          <div className="w-1/6 self-center">
            <img src={require(`../../assets/images/logos/ph.png`)} className="max-w-[9rem]" alt="Car" />
          </div>
          <div className="w-1/6 self-center">
            <img
              src={require(`../../assets/images/logos/aramex.png`)}
              alt="Car"
              className="max-w-[9rem]"
            />
          </div>
          <div className="w-1/6 self-center">
            <img src={require(`../../assets/images/logos/kw.png`)} className="max-w-[9rem]" alt="Car" />
          </div>
          <div className="w-1/6 self-center">
            <img src={require(`../../assets/images/logos/sh.png`)} className="max-w-[9rem]" alt="Car" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseSection;
