import { useAuthContext } from 'contexts/authContext/AuthProvider'

const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext()

  return { isLoggedIn, setIsLoggedIn }
}
export default useAuth
