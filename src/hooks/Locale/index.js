import React, {createContext, useState} from "react";
import {IntlProvider} from 'react-intl'

// Translations
import Portuguese from '../../lang/pt_BR.json';
import English from '../../lang/en-US.json';


const LocaleContext = createContext(null);

const LocaleProvider = (props) => {

  const navLanguage = navigator.language;
  const lang = navLanguage === "en-US" ? English : Portuguese;

  const [currentLocale, setCurrentLocale] = useState(navLanguage);
  const [messages, setMessages] = useState(lang);

  const selectLocale = (newLocale) => {
    console.log("aaaaaaaaaaaa");
    console.log(newLocale);
    setCurrentLocale(newLocale);
    newLocale === "en-US" ? setMessages(English) : setMessages(Portuguese);
  }

  return (
    <LocaleContext.Provider value={{currentLocale, messages, toogleLocale: selectLocale}}>
      <IntlProvider messages={messages} locale={currentLocale}>
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

const useLocale = () => React.useContext(LocaleContext);

export {useLocale, LocaleProvider};