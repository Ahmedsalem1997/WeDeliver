import React from "react";

const DriveWithUs = () => {
  return (
    <section className="w-full bg-mainOrange">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center w-1/4">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
            Drive With Us
          </h1>
          <p className="mb-8 text-white">
            Explore our selection of vehicles and learn about the options that
            are available to you based on your location.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-mainOrange bg-white border-0 p-4 px-8 focus:outline-none text-lg font-medium">
              Apply to drive
            </button>
          </div>
        </div>
        <div className="w-3/4">
          
        </div>
      </div>
    </section>
  );
};

export default DriveWithUs;
