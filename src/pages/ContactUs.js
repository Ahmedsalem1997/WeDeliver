import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { FormattedMessage } from "react-intl";
import BannerSection from "./../components/Sections/BannerSection";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <BannerSection page="contact" />

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                <FormattedMessage
                  id="contact.subtitle"
                  defaultMessage="contact.subtitle"
                ></FormattedMessage>
              </p>

              <div className="mt-8">
                <button className="text-2xl font-bold text-mainOrange">
                  0151 475 4450
                </button>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4">
                <div>
                  <label className="sr-only" for="name">
                    <FormattedMessage
                      id="contact.name"
                      defaultMessage="contact.name"
                    ></FormattedMessage>
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="email">
                    <FormattedMessage id="contact.email" defaultMessage="contact.email">
                    </FormattedMessage>
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="phone">
                    <FormattedMessage id="contact.phone" defaultMessage="contact.phone">
                    </FormattedMessage>
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="peer sr-only"
                      id="option1"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <label
                      for="option1"
                      className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabindex="0"
                    >
                      <span className="text-sm font-medium"> Option 1 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option2"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <label
                      for="option2"
                      className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabindex="0"
                    >
                      <span className="text-sm font-medium"> Option 2 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option3"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <label
                      for="option3"
                      className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabindex="0"
                    >
                      <span className="text-sm font-medium"> Option 3 </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" for="message">
                    <FormattedMessage
                      id="contact.message"
                      defaultMessage="contact.message"
                    ></FormattedMessage>
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
