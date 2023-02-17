import { Navigate, useRoutes } from 'react-router-dom'
import InternalDocument from 'src/pages/InternalDocument/InternalDocument'
import Logout from 'src/pages/Logout'
import Note from 'src/pages/Note'
import NotFoundPage from 'src/pages/NotFoundPage'
import Profile from 'src/pages/Profile'
import Register from 'src/pages/Register'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import NewRequest from '../pages/NewRequest'
import ProgressCheck from '../pages/ProgressCheck'
export default function useRouteElements() {
  const user = window.localStorage.getItem('account')
  const account = JSON.parse(JSON.parse(JSON.stringify(user)))

  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to={account.hoten ? '/trang-chu' : '/dang-nhap'} replace />
    },
    {
      path: '/trang-chu',
      element: <HomePage />
    },
    {
      path: '/dang-nhap',
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
      path: '/phieu',
      element: <Note />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])
  return routes
}
