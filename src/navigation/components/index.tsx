import { useAuthContext } from '@contexts/authContext/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

type PrivateRouteType = {
  roleRequired?: 'ADMIN' | 'USER'
}
const USER_TYPE = 'USER'

//! Private Routes
export const ProtectedRoute = () => {
  const { isLoggedIn } = useAuthContext()

  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
}

//! Public Routes
export const PublicRoutes = () => {
  const { isLoggedIn } = useAuthContext()

  return isLoggedIn ? <Navigate to='/dashboard' /> : <Outlet />
}

//! Protected Routes
export const PrivateRoutes = (props: PrivateRouteType) => {
  // const { isLoggedIn } = useAuth()

  return props.roleRequired == USER_TYPE ? (
    <Outlet />
  ) : (
    <Navigate to='/denied' />
  )
}

// ! Naviagte to proper dashboard

export const NavigateToDashboard = () => {
  // const { isLoggedIn } = useAuth()

  const setNavigationPath = (role: string) => {
    switch (role) {
      case 'USER':
        return <Navigate to='/user/dashboard' />
      case 'ADMIN':
        return <Navigate to='/admin/dashboard' />
      default:
        return <Navigate to='/denied' />
    }
  }
  return setNavigationPath(USER_TYPE)
}
