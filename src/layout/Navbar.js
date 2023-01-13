import { useState, useContext } from "react";
import Logo from "../assets/images/logo.png";
import { Context } from "../components/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const links = require("../assets/json/navbar.json");
  const context = useContext(Context);
  const [menuToggle, setMenuToggle] = useState(false);

  const openMobileMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="bg-dark">
      <nav className="container relative mx-auto px-8 lg:px-16 py-4 z-10">
        <div className="flex items-center justify-between my-4">
          <div className="z-30">
            <img src={Logo} alt="WeDeliver" id="logo" className="w-32" />
          </div>

          <div className="hidden items-center space-s-10 font-semibold text-grayishBlue md:flex">
            {links.mainNav.map((link) => {
              return (
                <Link
                  className="text-white text-decoration-none"
                  to={link.link}
                  key={link.id}
                >
                  <FormattedMessage
                    id={`mainNav.${link.name}`}
                    defaultMessage={link.name}
                  />
                </Link>
              );
            })}
            <select
              value={context.locale}
              onChange={context.selectLanguage}
              className="form-select navbar__language w-auto text-start bg-transparent border-0 text-white font-bold"
            >
              <option className="text-black" value={"en"}>
                ENGLISH
              </option>
              <option className="text-black" value={"ar"}>
                العربية
              </option>
            </select>
          </div>
          <button
            id="menu-btnp"
            onClick={openMobileMenu}
            className={`z-30 block md:hidden focus:outline-none hamburger ${
              menuToggle && "open"
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {menuToggle && (
          <div
            id="menu"
            className="fixed inset-0 z-20 flex-col items-left self-end w-5/6 h-full m-h-screen px-10 py-1 pt-32 pb-4 text-white bg-darkBg opacity-95"
          >
            {links.mainNav.map((link) => {
              return (
                <div className="w-full py-3 text-left">
                  <Link
                    className="block hover:text-mainOrange"
                    to={link.link}
                    key={link.id}
                  >
                    <FormattedMessage
                      id={`mainNav.${link.name}`}
                      defaultMessage={link.name}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
