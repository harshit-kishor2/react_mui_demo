import { Navigate } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import UserLayout from './UserLayout'

//protected Route state
type ProtectedRouteType = {
  roleRequired?: 'ADMIN' | 'USER'
}

const MainLayout = (props: ProtectedRouteType) => {
  //   const { isLoggedIn } = useAuth()
  const getLayout = (role: string) => {
    switch (role) {
      case 'USER':
        return <UserLayout />
      case 'ADMIN':
        return <AdminLayout />
      default:
        return <Navigate to='/denied' />
    }
  }

  return getLayout('USER')
}

export default MainLayout
