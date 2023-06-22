import { createTheme } from '@mui/material'
import { useMemo } from 'react'
import { useThemeModeContext } from '../contexts/themeContext/ThemeModeProvider'
import { themeSettings } from '../themes/theme'

const useThemeMode = () => {
  const { mode, setMode } = useThemeModeContext()

  const toggleColorMode = useMemo(
    () => setMode((prev: string) => (prev === 'light' ? 'dark' : 'light')),
    [setMode]
  )

  const themes = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return { themes, toggleColorMode }
}
export default useThemeMode
