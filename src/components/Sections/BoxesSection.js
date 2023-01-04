const BoxesSection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold text-center mt-16 lg:text-3xl leading-10">
        Few steps to be a CAPTAIN and start earning with us
      </h2>
      <div className="lg:flex m-8 gap-x-8">
        <div className="icon-card flex flex-col justify-evenly lg:w-1/4 rounded-lg p-8 pt-0 h-[24rem]">
          <img
            src={require(`../../assets/images/Signup.png`)}
            className="icon-card__icon w-[8rem] self-center my-8"
            alt="icon"
          />
          <div>
            <h2 className="text-xl font-bold text-left lg:text-xl mb-4">
              Sign Up
            </h2>
            <p>
              We need few information about you, and our team will contact you
              in 2 days.
            </p>
          </div>
        </div>
        <div className="icon-card flex flex-col justify-around lg:w-1/4 rounded-lg p-8 pt-0 h-[24rem]">
          <img
            src={require(`../../assets/images/Verified.png`)}
            className="icon-card__icon w-[8rem] self-center my-8"
            alt="icon"
          />
          <div>
            <h2 className="text-xl font-bold text-left lg:text-xl mb-4">
              Get Verified
            </h2>
            <p>
              All our captains have to pass our verification process, check the
              Captains page to know the eligibility criteria.
            </p>
          </div>
        </div>
        <div className="icon-card flex flex-col justify-around lg:w-1/4 rounded-lg p-8 pt-0 h-[24rem]">
          <img
            src={require(`../../assets/images/Verified-1.png`)}
            className="icon-card__icon w-[8rem] self-center my-8"
            alt="icon"
          />
          <div>
            <h2 className="text-xl font-bold text-left lg:text-xl mb-4">
              Choose your Vehicle
            </h2>
            <p>
              Using our smart calculator, you can estimate your weekly earnings
              and choose a suitable car with a flexible financing plan.
            </p>
          </div>
        </div>
        <div className="icon-card flex flex-col justify-around lg:w-1/4 rounded-lg p-8 pt-0 h-[24rem]">
          <img
            src={require(`../../assets/images/drive-own.png`)}
            className="icon-card__icon w-[8rem] self-center my-8"
            alt="icon"
          />
          <div>
            <h2 className="text-xl font-bold text-left lg:text-xl mb-4">
              Drive and Own
            </h2>
            <p>
              You will pay a weekly amount deducted from your earnings based on
              a up to 36 months plan with a clear path ownership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxesSection;
