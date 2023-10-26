import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from '../public/locales/en/translation.json';
import translationAR from '../public/locales/ar/translation.json';
import translationFA from '../public/locales/fa/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    },
    fa: {
        translation: translationFA
    }
};

i18n
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;