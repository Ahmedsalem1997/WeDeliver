import React from "react";
import { RiUserAddLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiCarKey } from "react-icons/gi";
import { FormattedMessage } from "react-intl";

const DriveWithUs = () => {
  return (
    <section className="w-full bg-mainOrange">
      <div className="container mx-auto flex p-12 md:flex-row flex-col items-center">
        <div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center w-1/4">
          <h1 className="rtl:text-right title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
            <FormattedMessage
              defaultMessage="Drive with us"
              id="driveWithUs.title"
            />
          </h1>
          <p className="rtl:text-right mb-8 text-white">
            <FormattedMessage
              defaultMessage="Explore our selection of vehicles and learn about the options that are available to you based on your location."
              id="driveWithUs.subtitle"
            />
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-mainOrange bg-white rounded-md border-0 p-4 px-8 focus:outline-none text-lg font-medium">
              <FormattedMessage
                defaultMessage="Apply to drive"
                id="driveWithUs.apply"
              />
            </button>
          </div>
        </div>
        <div className="w-3/4">
          <div className="stepper-wrapper">
            <div className="stepper-item completed">
              <div className="step-counter">
                <RiUserAddLine className="text-mainOrange text-3xl" />
              </div>
              <div className="step-name">
                <FormattedMessage
                  defaultMessage="Apply to drive"
                  id="driveWithUs.apply"
                />
              </div>
            </div>
            <div className="stepper-item">
              <div className="step-counter">
                <HiOutlineClipboardDocumentList className="text-mainOrange text-3xl" />
              </div>
              <div className="step-name">
                <FormattedMessage
                  defaultMessage="Get onboarded"
                  id="driveWithUs.getOnboarded"
                />
              </div>
            </div>
            <div className="stepper-item">
              <div className="step-counter">
                <GiCarKey className="text-mainOrange text-3xl" />
              </div>
              <div className="step-name">
                <FormattedMessage
                  defaultMessage="Drive with us"
                  id="driveWithUs.title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriveWithUs;
