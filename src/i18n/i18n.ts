import * as addRoomEN from '../locales/en/addRoom.json';
import * as addRoomPL from '../locales/pl/addRoom.json';
import * as dashboardEN from '../locales/en/dashboard.json';
import * as dashboardHeaderEN from '../locales/en/dashboardHeader.json';
import * as dashboardHeaderPL from '../locales/en/dashboardHeader.json';
import * as dashboardPageEN from '../locales/en/dashboardPage.json';
import * as dashboardPagePL from '../locales/pl/dashboardPage.json';
import * as dashboardPL from '../locales/pl/dashboard.json';
import * as footerEN from '../locales/en/footer.json';
import * as footerPL from '../locales/pl/footer.json';
import * as headerEN from '../locales/en/header.json';
import * as headerPL from '../locales/pl/header.json';
import * as loginFormEN from '../locales/en/loginForm.json';
import * as loginFormPL from '../locales/pl/loginForm.json';
import * as registerFormEN from '../locales/en/registerForm.json';
import * as registerFormPL from '../locales/pl/registerForm.json';
import * as userListEN from '../locales/en/userList.json';
import * as userListPL from '../locales/pl/userList.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    components: {
      addRoom: addRoomEN,
      dashboard: dashboardEN,
      dashboardHeader: dashboardHeaderEN,
      dashboardPage: dashboardPageEN,
      footer: footerEN,
      header: headerEN,
      loginForm: loginFormEN,
      registerForm: registerFormEN,
      userList: userListEN,
    },
  },
  pl: {
    components: {
      addRoom: addRoomPL,
      dashboard: dashboardPL,
      dashboardHeader: dashboardHeaderPL,
      dashboardPage: dashboardPagePL,
      footer: footerPL,
      header: headerPL,
      loginForm: loginFormPL,
      registerForm: registerFormPL,
      userList: userListPL,
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
