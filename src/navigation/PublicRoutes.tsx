import useAuth from 'hooks/useAuth'

import { Navigate } from 'react-router-dom'
import EmptyLayout from './layout/EmptyLayout'

const PublicRoutes = () => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? <Navigate to='/dashboard' /> : <EmptyLayout />
}

export default PublicRoutes
