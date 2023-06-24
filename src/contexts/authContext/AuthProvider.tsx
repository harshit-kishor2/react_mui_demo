import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface IAuthContext {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}
interface Props {
  children?: ReactNode
}
// step1- Create context
const AuthContext = createContext<IAuthContext | null>(null)

// step-2 Create Provider (for Wrapping component that can access it)
export const AuthProvider = ({ children, ...props }: Props) => {
  //   const [userDetails, setUserDetails] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  const contextValue: IAuthContext = {
    // userDetails,
    // setUserDetails,
    isLoggedIn,
    setIsLoggedIn,
  }
  return (
    <AuthContext.Provider value={contextValue} {...props}>
      {children}
    </AuthContext.Provider>
  )
}

// step-3 Use Context
export const useAuthContext = (): IAuthContext => {
  const auth = useContext<IAuthContext | null>(AuthContext)

  if (!auth) {
    throw new Error('useAuthContext must be used within AuthContext')
  }

  return auth
}
