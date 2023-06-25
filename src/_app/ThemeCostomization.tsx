import { ReactNode } from 'react'

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ComponentsOverrides from 'themes/overrides'
import { themeSettings } from 'themes/theme'
import { useThemeModeContext } from 'contexts/themeContext/ThemeModeProvider'

interface Props {
  children?: ReactNode
}

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

const ThemeCustomization = ({ children }: Props) => {
  const { mode } = useThemeModeContext()
  const themes = createTheme(themeSettings(mode))
  themes.components = ComponentsOverrides(themes)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeCustomization
