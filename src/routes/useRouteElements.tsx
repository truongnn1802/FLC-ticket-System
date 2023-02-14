import { useRoutes } from 'react-router-dom'
import Login from '../pages/Login'
import NewRequest from '../pages/NewRequest'
import ProgressCheck from '../pages/ProgressCheck'
import HomePage from '../pages/HomePage'
import Register from 'src/pages/Register'
import InternalDocument from 'src/pages/InternalDocument/InternalDocument'
export default function useRouteElements() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/new-request',
      element: <NewRequest />
    },
    {
      path: '/progress-check',
      element: <ProgressCheck />
    },
    {
      path: '/register',
      element: <Register/>
    },
<<<<<<< HEAD
=======
    {
      path: '/test',
      element: <InternalDocument/>
    }
>>>>>>> 44881cd (minhcommit)
  ])
  return routes
}
