import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DriveWithUs from "../components/Sections/DriveWithUs";
import { GiCarWheel } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { HiOutlineUserAdd } from "react-icons/hi";
import { Skeleton } from "antd";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const SingleVehicle = () => {
  const [singleVehicle, setSingleVehicle] = useState({});
  const [featuredImage, setFeaturedImage] = useState(
    singleVehicle?.images?.[0]?.url
  );
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const fetchSingleVehicle = () => {
    fetch(
      `https://fintech.services.wedeliverapp.com/api/v1/vehicle/${params.id}`
    )
      .then((response) => response.json())
      .then((data) => setSingleVehicle(data));
  };

  useEffect(() => {
    fetchSingleVehicle();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const changeImageHandler = (image) => {
    setFeaturedImage(image?.url);
  };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container lg:px-10 xl:px-32 pt-6 mx-auto flex flex-wrap">
          <div className="lg:flex w-full mb-5 justify-between">
            <Skeleton active loading={loading} paragraph={{ rows: 1 }}>
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 self-center">
                {
                  singleVehicle?.manufacturer_model?.manufacturer
                    ?.manufacturer_name_en
                }{" "}
                {singleVehicle?.manufacturer_model?.manufacturer_model_name_en}
              </h1>
            </Skeleton>
            <div className="flex justify-between gap-x-4">
              <button className="p-4 w-44 text-sm font-medium mx-auto lg:mx-0 text-mainOrange border border-mainOrange rounded md:text-base">
                Rent to Drive
              </button>
              <button className="p-4 w-44 text-sm font-medium mx-auto lg:mx-0 text-white bg-mainOrange rounded md:text-base">
                Drive to Own
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="container lg:px-10 xl:px-32 pt-4 pb-10 mx-auto flex flex-wrap">
          <div className="flex max-[600px]:flex-col-reverse">
            <div className="flex justify-center mx-auto xl:flex-col max-sm:w-1/4 gap-y-2">
              {singleVehicle?.images?.map((image) => (
                <button
                  key={image?.id}
                  onClick={() => changeImageHandler(image)}
                >
                  {loading ? (
                    <Skeleton.Image active loading={loading}></Skeleton.Image>
                  ) : (
                    <img
                      alt="gallery"
                      className={`max-w-[4rem] my-4 xl:max-w-[12rem] object-cover h-full object-center block rounded-md border-2 hover:border-mainOrange`}
                      src={image?.url}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap w-full justify-between">
              <div className="w-full max-[600px]:shadow-lg">
                {loading ? (
                  <Skeleton.Image active loading={loading}></Skeleton.Image>
                ) : (
                  <img
                    alt="gallery"
                    className="h-auto w-[65rem] object-contain object-center block"
                    src={`${featuredImage || singleVehicle?.images?.[0]?.url}`}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full my-5 justify-between">
            <h1 className="sm:text-3xl text-xl font-medium title-font text-gray-800 lg:w-1/3">
              Description
            </h1>
            <p className="text-gray-700 my-5">
              This car comes with Anti-Lock Brakes, Automatic Air Conditioning,
              Power-Assisted Steering, Driver, Passenger, Front Side And Side
              Air Bags, 16In Alloy Wheels, Cruise Control, Satellite Navigation,
              Trip Computer, Electric Door Mirrors, Immobiliser. I also have
              Front Fog Lights, Seats Split Rear, Front Electric Windows,
              Deadlocks, Audio Steering Wheel Mounted Controls, Front/Rear Head
              Restraints, Bluetooth Interface Telephone Equipment, Centre Rear
              Seat Belt.
            </p>
          </div>
          <div className="flex flex-col w-full mx-auto my-5 justify-between">
            <h1 className="text-xl font-medium title-font text-gray-800 lg:w-1/3 lg:mb-0">
              Features
            </h1>
            <div className="flex max-[600px]:flex-col xl:gap-16 md:gap-4">
              <div className="box-card">
                <div className="card-heading mb-4">
                  <div className="bg-mainOrange px-3 py-2 rounded-md w-12 my-2">
                    <GiCarWheel color="white" size={"24px"} />
                  </div>
                  <h2 className="text-md font-bold title-font text-gray-900 lg:mb-0 mb-8">
                    Car & accessories
                  </h2>
                </div>
                <div className="card-body">
                  <ul className="flex flex-col justify-between gap-y-2">
                    <li>Access to a brand new car</li>
                    <li>Rental & car ownership products</li>
                    <li>Free mobile phone & data</li>
                    <li>Dash cam & tracker for safety</li>
                    <li>Phone holder</li>
                  </ul>
                </div>
              </div>
              <div className="box-card">
                <div className="card-heading">
                  <h2 className="text-md font-bold title-font text-gray-900 lg:mb-0 mb-8">
                    <div className="bg-mainOrange px-3 py-2 rounded-md w-12 my-2">
                      <AiFillCar color="white" size={"24px"} />
                    </div>
                    Services included
                  </h2>
                </div>
                <div className="card-body">
                  <ul className="flex flex-col justify-between gap-y-2">
                    <li>Access to a brand new car</li>
                    <li>Rental & car ownership products</li>
                    <li>Free mobile phone & data</li>
                    <li>Dash cam & tracker for safety</li>
                    <li>Phone holder</li>
                  </ul>
                </div>
              </div>
              <div className="box-card">
                <div className="card-heading">
                  <h2 className="text-md font-bold title-font text-gray-900 lg:mb-0 mb-8">
                    <div className="bg-mainOrange px-3 py-2 rounded-md w-12 my-2">
                      <HiOutlineUserAdd color="white" size={"24px"} />
                    </div>
                    Other Benefits
                  </h2>
                </div>
                <div className="card-body">
                  <ul className="flex flex-col justify-between gap-y-2">
                    <li>Access to a brand new car</li>
                    <li>Rental & car ownership products</li>
                    <li>Free mobile phone & data</li>
                    <li>Dash cam & tracker for safety</li>
                    <li>Phone holder</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DriveWithUs />
      <Footer />
    </>
  );
};

export default SingleVehicle;
