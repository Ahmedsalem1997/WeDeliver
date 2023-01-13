import {IntlProvider} from 'react-intl';
import English from '../../lang/en.json';
import Arabic from '../../lang/ar.json';
import React, { useState, createContext } from "react";

export const Context = createContext();
const local = navigator.language;
let lang;
local === "ar" ? lang = Arabic : lang = English;

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    const selectLanguage = (e) => {
        const newLocale = e.target.value;
        const htmlPage = document.getElementById("page");
        setLocale(newLocale);
        if(newLocale === "ar") {
            setMessages(Arabic);
            htmlPage.setAttribute('dir', 'rtl');
        } else {
            setMessages(English);
            htmlPage.setAttribute('dir', 'ltr');
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}


export default Wrapper;
