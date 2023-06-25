import useAuth from 'hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRouteType = {
  roleRequired?: 'ADMIN' | 'USER'
}
const USER_TYPE = 'USER'

//! Private Routes
export const PrivateRoutes = () => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
}

//! Public Routes
export const PublicRoutes = () => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? <Navigate to='/dashboard' /> : <Outlet />
}

//! Protected Routes
export const ProtectedRoute = (props: ProtectedRouteType) => {
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
