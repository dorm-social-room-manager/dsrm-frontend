import 'react-i18next';
import en from './locales/RegisterForm/en.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof en;
  }
}
