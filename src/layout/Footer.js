import { Link, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  const links = require("../assets/json/footer.json");
  const navigate = useNavigate();

  return (
    <div className="bg-dark h-100">
      <div className="container mx-auto p-8 py-32 lg:flex">
        <div className="lg:w-1/4 px-4">
          <img
            src={require(`../assets/images/Secondary-LogoWhite.png`)}
            alt="WeDeliver"
            onClick={() => navigate('/')}
            className="max-w-[10rem] mx-auto lg:mx-0"
          />
          <p className="text-center lg:text-left text-gray-400 leading-relaxed my-8 lg:rtl:text-right">
            <FormattedMessage id="footer.about" defaultMessage="footer.about" />
          </p>
        </div>
        <div className="text-center lg:text-left lg:w-1/4 px-4">
          <h2 className="text-white font-bold uppercase mt-8 mb-4 lg:mt-0 lg:rtl:text-right">
            <FormattedMessage
              id="footer.company"
              defaultMessage="footer.company"
            />
          </h2>
          <div className="useful-links flex flex-col justify-between space-y-2">
            {links.footer.column2.links.map((link) => {
              return (
                <Link
                  className="text-gray-500 lg:rtl:text-right hover:text-mainOrange transition duration-200 ease-linear"
                  to={link.link}
                  key={link.id}
                >
                  <FormattedMessage
                    id={`links.${link.name}`}
                    defaultMessage={link.name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="text-center lg:text-left lg:w-1/4 px-4">
          <h2 className="text-white font-bold uppercase mt-8 mb-4 lg:mt-0 lg:rtl:text-right">
            <FormattedMessage id="footer.help" defaultMessage="footer.help" />
          </h2>
          <div className="useful-links flex flex-col justify-between space-y-2">
            {links.footer.column3.links.map((link) => {
              return (
                <Link
                  className="text-gray-500 lg:rtl:text-right hover:text-mainOrange transition duration-200 ease-linear"
                  to={link.link}
                  key={link.id}
                >
                  <FormattedMessage
                    id={`links.${link.name}`}
                    defaultMessage={link.name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="text-center lg:text-left lg:w-1/4 px-4">
          <h2 className="text-white font-bold uppercase mt-8 mb-4 lg:mt-0 lg:rtl:text-right">
            <FormattedMessage
              id="footer.getStarted"
              defaultMessage="footer.getStarted"
            />
          </h2>
          <div className="useful-links flex flex-col justify-between space-y-2">
            {links.footer.column4.links.map((link) => {
              return (
                <Link
                  className="text-gray-500 lg:rtl:text-right hover:text-mainOrange transition duration-200 ease-linear"
                  to={link.link}
                  key={link.id}
                >
                  <FormattedMessage
                    id={`links.${link.name}`}
                    defaultMessage={link.name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <p className="text-gray-400">Copyright © 2023 - WEDELIVERTECH INC.</p>
      </div>
    </div>
  );
};

export default Footer;
