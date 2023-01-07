const BoxesSection = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mt-16 lg:text-3xl leading-10">
        Few steps to be a CAPTAIN and start earning with us
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
            <h2 className="text-xl font-bold text-center lg:text-center lg:text-left lg:text-xl mb-4">
              Sign Up
            </h2>
            <p>
              We need few information about you, and our team will contact you
              in 2 days.
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
            <h2 className="text-xl font-bold text-center lg:text-left lg:text-xl mb-4">
              Get Verified
            </h2>
            <p>
              All our captains have to pass our verification process, check the
              Captains page to know the eligibility criteria.
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
            <h2 className="text-xl font-bold text-center lg:text-left lg:text-xl mb-4">
              Choose your Vehicle
            </h2>
            <p>
              Using our smart calculator, you can estimate your weekly earnings
              and choose a suitable car with a flexible financing plan.
            </p>
          </div>
        </div>
        <div className="icon-card flex flex-col justify-around lg:w-1/4 rounded-lg my-4 p-8 pt-0 h-[24rem]">
          <img
            src={require(`../../assets/images/drive-own.png`)}
            className="icon-card__icon w-[8rem] self-center my-8"
            alt="icon"
          />
          <div>
            <h2 className="text-xl font-bold text-center lg:text-left lg:text-xl mb-4">
              Drive and Own
            </h2>
            <p>
              You will pay a weekly amount deducted from your earnings based on
              a up to 36 months plan with a clear path ownership.
            </p>
          </div>
        </div>
      </div>
      {/* choose your vehicle */}
      <div className="car-gradient-box lg:flex rounded-xl lg:px-16 px-4 justify-between m-4 lg:m-8 py-4 lg:h-80">
        <div className="lg:w-1/2 self-center">
          <h2 className="text-white text-center text-3xl font-bold mt-8 lg:text-5xl lg:text-left">
            Choose your Vehicle
          </h2>
          <p className="text-white text-center my-4 lg:text-left">
            Using our smart calculator, you will soon be able to estimate your
            earnings, choose your most suitable vehicles with flexible financing
            plan.
          </p>
          <button className="p-4 w-full text-sm font-semibold text-white my-4 bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
            Estimate your Earnings
          </button>
        </div>
        <div className="lg:w-1/3 self-center">
          <img src={require(`../../assets/images/aa.png`)} alt="Car" />
        </div>
      </div>
    </div>
  );
};

export default BoxesSection;
