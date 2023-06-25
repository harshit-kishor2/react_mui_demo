import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import MainLayout from './layout/MainLayout'

import {
  NavigateToDashboard,
  PrivateRoutes,
  ProtectedRoute,
  PublicRoutes,
} from './components'
import { Loadable } from 'src/components'

const LoginPage = Loadable(lazy(() => import('src/screens/LoginPage')))

const Homepage = Loadable(lazy(() => import('src/screens/Homepage')))

const SamplePage = Loadable(lazy(() => import('src/screens/SamplePage')))
const DeniedPage = Loadable(lazy(() => import('src/screens/DeniedPage')))
const NotFoundPage = Loadable(lazy(() => import('src/screens/NotFoundPage')))

const routes: RouteObject[] = [
  // Will be accessed from Logged in Users
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <MainLayout />, // Render layout based on logged in user (join drawer and app bar)
        children: [
          { path: '/', element: <NavigateToDashboard /> },

          // Can access only admin
          {
            path: '/admin',
            element: <PrivateRoutes roleRequired='ADMIN' />,
            children: [
              {
                path: '/admin',
                element: <Navigate to='/admin/dashboard' replace />,
              },
              { path: '/admin/dashboard', element: <Homepage /> },
              // { path: '/dashboard', element: <Homepage /> },
            ],
          },

          // Can access only user
          {
            path: '/user',
            element: <PrivateRoutes roleRequired='USER' />,
            children: [
              {
                path: '/user',
                element: <Navigate to='/user/dashboard' replace />,
              },
              { path: '/user/dashboard', element: <Homepage /> },
              // { path: '/dashboard', element: <Homepage /> },
            ],
          },

          // Can access by any logged in user
          { path: '/sample-page', element: <SamplePage /> },
        ],
      },
      { path: '*', element: <Navigate to='/not-found' replace /> },
    ],
  },

  // Will be accessed from Logged out Users
  {
    path: '/',
    element: <PublicRoutes />,
    children: [
      { path: '/', element: <Navigate to='/login' /> },
      { path: 'login', element: <LoginPage /> },
      // { path: 'forgot-password', element: <ForgotPasswordPage /> },
    ],
  },

  // Will be accessed from any users
  { path: '/denied', element: <DeniedPage /> },
  { path: '/not-found', element: <NotFoundPage /> },
]

export default routes
