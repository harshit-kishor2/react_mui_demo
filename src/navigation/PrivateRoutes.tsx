import useAuth from 'hooks/useAuth'

import { Navigate } from 'react-router-dom'
import EmptyLayout from './layout/EmptyLayout'
import UserLayout from './layout/UserLayout'

//protected Route state
type ProtectedRouteType = {
  roleRequired?: 'ADMIN' | 'USER'
}

const PrivateRoutes = (props: ProtectedRouteType) => {
  const { isLoggedIn } = useAuth()

  //if the role required is there or not
  if (props.roleRequired) {
    return isLoggedIn ? (
      props.roleRequired === 'ADMIN' ? (
        <EmptyLayout />
      ) : (
        <Navigate to='/denied' />
      )
    ) : (
      <Navigate to='/login' />
    )
  } else {
    return isLoggedIn ? <UserLayout /> : <Navigate to='/login' />
  }
}

export default PrivateRoutes
