import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { LoginPage } from './pages/Loginpage/LoginPage';

import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { UserListPage } from './pages/UserListPage/UserListPage';

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
