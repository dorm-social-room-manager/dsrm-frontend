import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


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
