import {
  createContext,
  useContext,
  FC,
  useState,
  SetStateAction,
  Dispatch,
} from 'react'

type Previous = { oneArg: string; anotherArg: string }

export interface IThemeModeContext {
  mode: string
  setMode: Dispatch<SetStateAction<string>>
}

// step1- Create context
const ThemeModeContext = createContext<IThemeModeContext | null>(null)

// step-2 Create Provider
export const ThemeModeProvider: FC = (props) => {
  const [mode, setMode] = useState<string>('dark')
  const contextValue: IThemeModeContext = {
    mode,
    setMode,
  }
  return <ThemeModeContext.Provider value={contextValue} {...props} />
}

// step-3 Use Context
export const useThemeModeContext = (): IThemeModeContext => {
  const colorMode = useContext(ThemeModeContext)

  if (!colorMode) {
    throw new Error('useThemeModeContext must be used within ThemeModeContext')
  }

  return colorMode
}
