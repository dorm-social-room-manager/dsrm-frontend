import { Route, Routes } from 'react-router-dom';
import { AddRoomPage } from './pages/AddRoomPage';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserListPage } from './pages/UserListPage';

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
      <Route
        path='/dashboard/add-room'
        element={<AddRoomPage />}
      />
    </Routes>
  );
}
