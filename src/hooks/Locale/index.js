import {createContext, useContext, useState} from "react";
import {IntlProvider} from 'react-intl'

// Translations
import Portuguese from '../../lang/pt_BR.json';
import English from '../../lang/en-US.json';


const LocaleContext = createContext({
  currentLocale: "en-US",
  lange: English,
  selectLocale: () => {},
});

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
    <LocaleContext.Provider value={{currentLocale, messages, selectLocale}}>
      <IntlProvider messages={messages} locale={currentLocale}>
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

const useLocale = () => useContext(LocaleContext);

export {useLocale, LocaleProvider};