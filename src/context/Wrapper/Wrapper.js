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


    const switchLanguage = () => {
        const htmlP = document.getElementById("page");
        if(messages === Arabic) {
            setMessages(English);
            htmlP.setAttribute('dir', 'ltr');
            setLocale("en")
        }
        else {
            setMessages(Arabic);
            htmlP.setAttribute('dir', 'rtl');
            setLocale("ar")
        }
    }

    return (
        <Context.Provider value = {{locale, switchLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}


export default Wrapper;
