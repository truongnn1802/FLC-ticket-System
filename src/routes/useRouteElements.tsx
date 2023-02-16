import { useRoutes } from 'react-router-dom'
import Login from '../pages/Login'
import NewRequest from '../pages/NewRequest'
import ProgressCheck from '../pages/ProgressCheck'
import HomePage from '../pages/HomePage'
import Register from 'src/pages/Register'
import InternalDocument from 'src/pages/InternalDocument/InternalDocument'
import Logout from 'src/pages/Logout'
import Profile from 'src/pages/Profile'
import Note from 'src/pages/Note'
import NotFoundPage from 'src/pages/NotFoundPage'
export default function useRouteElements() {
  const routes = useRoutes([
    {
      path: '/trang-chu',
      element: <HomePage />
    },
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/yeu-cau-moi',
      element: <NewRequest />
    },
    {
      path: '/kiem-tra-tien-do',
      element: <ProgressCheck />
    },
    {
      path: '/dang-ky',
      element: <Register />
    },
    {
      path: '/document',
      element: <InternalDocument />
    },
    {
      path: '/dang-xuat',
      element: <Logout />
    },
    {
      path: '/thong-tin-ca-nhan',
      element: <Profile />
    },
    {
      path: '/ticket',
      element: <Note />
    },
    {
      path: '*',
      element: <NotFoundPage />
    },
  ])
  return routes
}
