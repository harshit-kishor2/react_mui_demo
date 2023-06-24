import Loadable from 'components/Loadable'

import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const LoginPage = Loadable(lazy(() => import('screens/LoginPage')))

const Homepage = Loadable(lazy(() => import('screens/Homepage')))

const SamplePage = Loadable(lazy(() => import('screens/SamplePage')))

const routes = [
  {
    path: '/',
    element: <PrivateRoutes />,
    children: [
      { path: '/', element: <Navigate to='/dashboard' /> },
      // Dashboard
      { path: '/dashboard', element: <Homepage /> },
      { path: '/sample-page', element: <SamplePage /> },
      { path: '*', element: <Navigate to='/' replace /> },
    ],
  },
  {
    path: '/',
    element: <PublicRoutes />,
    children: [
      { path: 'login', element: <LoginPage /> },
      // { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: '/', element: <Navigate to='/login' /> },
    ],
  },
]

export default routes
