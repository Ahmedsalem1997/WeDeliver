import { IntlProvider } from "react-intl";
import English from "../../lang/en.json";
import Arabic from "../../lang/ar.json";
import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();
const local = localStorage["locale"] ? localStorage["locale"] : "en";
let lang;
local === "ar" ? (lang = Arabic) : (lang = English);

const Wrapper = (props) => {
  const [currentLocal, setCurrentLocal] = useState(local);
  const [messages, setMessages] = useState(lang);
  const htmlP = document.getElementById("page");



  useEffect(() => {
    if (currentLocal === "ar") {
      htmlP.setAttribute("dir", "rtl");
    } else {
      htmlP.setAttribute("dir", "ltr");
    }
  }, [currentLocal, htmlP]);

  const switchLanguage = () => {
    if (currentLocal === "ar") {
      setMessages(English);
      htmlP.setAttribute("dir", "ltr");
      setCurrentLocal("en");
      localStorage.setItem("locale", "en");
    }
    if (currentLocal === "en") {
      setMessages(Arabic);
      htmlP.setAttribute("dir", "rtl");
      setCurrentLocal("ar");
      localStorage.setItem("locale", "ar");
    }
  };

  return (
    <Context.Provider value={{ currentLocal, switchLanguage }}>
      <IntlProvider messages={messages} locale={currentLocal}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
