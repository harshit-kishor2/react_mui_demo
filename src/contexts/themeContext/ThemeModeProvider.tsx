import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

export interface IThemeModeContext {
  mode: string
  setMode: Dispatch<SetStateAction<string>>
}
interface Props {
  children?: ReactNode
}
// step1- Create context
const ThemeModeContext = createContext<IThemeModeContext | null>(null)

// step-2 Create Provider (for Wrapping component that can access it)
export const ThemeModeProvider = ({ children, ...props }: Props) => {
  const [mode, setMode] = useState<string>('light')
  const contextValue: IThemeModeContext = {
    mode,
    setMode,
  }
  return (
    <ThemeModeContext.Provider value={contextValue} {...props}>
      {children}
    </ThemeModeContext.Provider>
  )
}

// step-3 Use Context
export const useThemeModeContext = (): IThemeModeContext => {
  const colorMode = useContext<IThemeModeContext | null>(ThemeModeContext)

  if (!colorMode) {
    throw new Error('useThemeModeContext must be used within ThemeModeContext')
  }

  return colorMode
}
