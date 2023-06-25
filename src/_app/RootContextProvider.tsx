import { AuthProvider } from '@contexts/authContext/AuthProvider'
import { ThemeModeProvider } from '@contexts/themeContext/ThemeModeProvider'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

// ==============================|| DEFAULT CONTEXT PROVIDER - MAIN  ||============================== //

const RootContextProvider = ({ children }: Props) => {
  return (
    <ThemeModeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeModeProvider>
  )
}

export default RootContextProvider
