import { ReactNode } from 'react'

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { useThemeModeContext } from '@contexts/themeContext/ThemeModeProvider'
import { themeSettings } from 'src/themes/theme'
import ComponentsOverrides from 'src/themes/overrides'

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
