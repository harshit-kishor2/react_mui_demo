import { ReactNode } from 'react'
import { AuthProvider } from 'src/contexts/authContext/AuthProvider'
import { ThemeModeProvider } from 'src/contexts/themeContext/ThemeModeProvider'

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
