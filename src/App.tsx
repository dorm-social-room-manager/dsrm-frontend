import { Route, Routes } from 'react-router-dom';
import { Footer } from './templates/Footer/Footer';
import { Header } from './templates/Header/Header';
import { LoginPage } from './pages/LoginPage';
import { HeaderProps } from './templates/Header/Header.types';
import { useTranslation } from 'react-i18next';

export function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Header />}
      ></Route>
      <Route
        path='/'
        element={<LoginPage />}
      />
      <Route
        path='/'
        element={<Footer />}
      />
    </Routes>
  );
}
