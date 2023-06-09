import React from "react";
import { useNavigate } from "react-router-dom";
import BannerSection from "../components/Sections/BannerSection";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Agility",
    description:
      "WeDeliver embraces agility as a core value, enabling the team to adapt quickly to changes, seize opportunities, and stay ahead in the fast-paced mobility and logistics industry. Being agile allows us to respond to customer needs promptly, make informed decisions, and continuously improve our solutions and services.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Collaboration",
    description:
      "Collaboration is essential to the success of WeDeliver. We foster a culture of collaboration, teamwork, and open communication, both internally within our team and externally with our clients and partners. By working together, we leverage diverse perspectives, share knowledge, and achieve greater results, ultimately delivering exceptional value to our customers.",
    icon: LockClosedIcon,
  },
  {
    name: "Ownership",
    description:
      "The WeDeliver team takes ownership of their work and responsibilities. We are accountable for our actions, outcomes, and the success of our clients. Taking ownership means being proactive, resourceful, and committed to delivering excellence. We take pride in our work and go above and beyond to ensure the satisfaction of our customers.",
    icon: ArrowPathIcon,
  },
  {
    name: "Customer-Centricity",
    description:
      "WeDeliver is deeply committed to putting our customers at the center of everything we do. We prioritize understanding their needs, challenges, and aspirations, and we strive to exceed their expectations with tailored solutions and exceptional service. Our team is dedicated to building long-lasting partnerships, listening to feedback, and continuously improving our offerings to deliver the utmost value and satisfaction to our customers.",
    icon: FingerPrintIcon,
  },
];

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <BannerSection page="about" />
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 pt-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={require("../assets/images/aboutus.jpg")}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:block lg:w-16 lg:bg-gray-100 ltr:lg:-left-16 rtl:lg:-right-16"></span>
              <div className="p-8 sm:p-16 lg:p-10 lg:py-12">
                <h2 className="text-2xl font-bold sm:text-3xl">About Us</h2>
                <p className="mt-4 text-gray-600">
                  WeDeliver is a leading provider of fintech-driven mobility
                  solutions, empowering businesses in the ever-evolving gig
                  economy. Through a strong focus on fintech-driven services and
                  industry expertise, we simplify fleet scaling, optimize
                  operations, and enhance payment processing for their mobility
                  gig workers and delivery drivers. At WeDeliver, we understand
                  the unique challenges faced by businesses in the mobility and
                  logistics industry. That's why we have developed a
                  comprehensive suite of solutions designed to streamline and
                  simplify these complexities including operational vehicle
                  leasing, skilled manpower provisioning, and advanced payment
                  processing. Through operational vehicle leasing, we provide
                  businesses with ready-for-work vehicles on a monthly lease
                  basis, ensuring low vehicle downtime and uninterrupted
                  operations. Our skilled manpower solutions ensure that
                  enterprises have access to trained and regulation-compliant
                  delivery drivers, eliminating the challenges of finding and
                  managing a reliable workforce. Additionally, our advanced
                  payment processing system, Thrivve, enables seamless salary
                  processing and payment management for delivery fleets, while
                  also empowering gig workers with a range of financial
                  services. By integrating innovative fintech solutions, we
                  drive operational efficiency and enable businesses to thrive
                  in the fast-paced gig economy. Welcome to WeDeliver, where
                  fintech meets mobility and logistics.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="btn-main w-56"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* bg image info section*/}

      {/* features */}
      <div className="bg-white">
        <div className="py-2 sm:px-6 sm:py-32">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#ccc" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:py-28 lg:pb-20 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                When Fintech Meets Mobility, New Possibilities Unleashed.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8 lg:w-2/3">
              <img src={require(`../assets/images/enterprise.jpg`)} alt="Car" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Our Values{" "}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              These values of agility, collaboration, and ownership
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              form the backbone of the WeDeliver team's culture, guiding our
              behavior and driving our performance to achieve outstanding
              results in the mobility and logistics industry.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
