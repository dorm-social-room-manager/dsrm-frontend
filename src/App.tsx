import { Route, Routes } from 'react-router-dom';
import { AddRoomForm } from './components/AddRoomForm/AddRoomForm';
import { AddRoomPage } from './pages/AddRoomPage';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';

import { RegisterPage } from './pages/RegisterPage';
import { RoomType } from './components/AddRoomForm/AddRoomForm.types';
import { UserListPage } from './pages/UserListPage';

const ROOM_TYPES: RoomType[] = [
  {
    id: 1,
    name: 'STUDY',
  },
  {
    id: 2,
    name: 'TV',
  },
  {
    id: 3,
    name: 'BILLARD',
  },
  {
    id: 4,
    name: 'PING PONG',
  },
  {
    id: 5,
    name: 'LAUNDRY',
  },
];

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
      <Route
        path='/dashboard/add-room/t'
        element={<AddRoomForm roomTypes={ROOM_TYPES} />}
      />
    </Routes>
  );
}
