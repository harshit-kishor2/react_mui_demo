import Loadable from 'components/Loadable'

import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import MinimalLayout from './layout/MinimalLayout'

const LoginPage = Loadable(lazy(() => import('screens/LoginPage')))

const Homepage = Loadable(lazy(() => import('screens/Homepage')))

const SamplePage = Loadable(lazy(() => import('screens/SamplePage')))

const routes = (isLoggedIn: boolean) => [
  {
    path: '/',
    element: isLoggedIn ? <MainLayout /> : <Navigate to='/login' />,
    children: [
      { path: '/', element: <Navigate to='/dashboard' /> },
      // Dashboard
      { path: '/dashboard', element: <Homepage /> },
      { path: '/sample-page', element: <SamplePage /> },
      { path: '*', element: <Navigate to='/' replace /> },
      // {
      //     path: 'member',
      //     element: <Outlet />,
      //     children: [
      //         { path: '/', element: <MemberGrid /> },
      //         { path: '/add', element: <AddMember /> }
      //     ]
      // }
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <MinimalLayout /> : <Navigate to='/app/dashboard' />,
    children: [
      { path: 'login', element: <LoginPage /> },
      // { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: '/', element: <Navigate to='/login' /> },
    ],
  },
]

export default routes
