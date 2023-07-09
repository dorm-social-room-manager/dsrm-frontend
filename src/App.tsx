import { Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { DashboardPage } from './pages/DashboardPage';
import { JwtResponse } from './common/types/OperationTypes.types';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserListPage } from './pages/UserListPage';

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  const [resource, options] = args;
  const cookies = new Cookies();
  console.log('TEST1');
  const token: JwtResponse = cookies.get<JwtResponse>('jwt_authorization');
  console.log('TEST2');
  if (token && token.accessToken && options) {
    console.log('TEST3');
    options.headers = {
      ...options.headers,
      Authentication: `Bearer ${token.accessToken}`,
    };
    console.log('TEST3.5');
  }
  console.log('TEST4');
  return await originalFetch(resource, options);
};

export function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<LoginPage />}
      />
      <Route
        path='/register'
        element={<RegisterPage />}
      />
      <Route
        path='/dashboard'
        element={<DashboardPage />}
      />
      <Route
        path='/dashboard/user-list'
        element={<UserListPage />}
      />
    </Routes>
  );
}
