import { createTheme } from '@mui/material'
import { useMemo, useState } from 'react'
import { themeSettings } from '../../_app/theme'
import { useThemeModeContext } from './ThemeProvider'

const useMode = () => {
  const { mode, setMode } = useThemeModeContext()

  const toggleColorMode = () =>
    useMemo(
      () => setMode((prev: string) => (prev === 'light' ? 'dark' : 'light')),
      []
    )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return [theme, toggleColorMode]
}
export default useMode
