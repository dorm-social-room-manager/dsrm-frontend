import * as footerEN from '../locales/en/footer.json';
import * as footerPL from '../locales/pl/footer.json';
import * as LoginFormEN from '../locales/en/LoginForm.json';
import * as LoginFormPL from '../locales/pl/LoginForm.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    components: {
      footer: footerEN,
      LoginForm: LoginFormEN,
    },
  },
  pl: {
    components: {
      footer: footerPL,
      LoginForm: LoginFormPL,
    },
  },
};

void i18n.use(initReactI18next).init({
  defaultNS: 'components',
  fallbackLng: ['en'],
  react: {
    bindI18n: 'languageChanged',
  },
  resources: resources,
});

export { i18n };
