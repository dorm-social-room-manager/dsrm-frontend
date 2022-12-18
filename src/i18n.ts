import * as en from './locales/Footer/en.json';
import * as pl from './locales/Footer/pl.json';
import Backend from 'i18next-http-backend';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en,
  pl,
};

export const availableLanguages = Object.keys(resources);

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    defaultNS: 'common',
    fallbackLng: ['en'],
    react: {
      bindI18n: 'languageChanged',
    },
    resources: resources,
  });

export { i18n };
