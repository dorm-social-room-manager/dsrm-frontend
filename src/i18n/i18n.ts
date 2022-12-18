import * as footerEN from '../locales/en/footer.json';
import * as footerPL from '../locales/pl/footer.json';
import * as loginFormEN from '../locales/en/loginForm.json';
import * as loginFormPL from '../locales/pl/loginForm.json';
import * as RegisterFormEN from '../locales/en/RegisterForm.json';
import * as RegisterFormPL from '../locales/pl/RegisterForm.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    components: {
      footer: footerEN,
      loginForm: loginFormEN,
      RegisterForm: RegisterFormEN,
    },
  },
  pl: {
    components: {
      footer: footerPL,
      loginForm: loginFormPL,
      RegisterForm: RegisterFormPL,
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
