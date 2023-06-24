import { ReactNode } from 'react'

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import ComponentsOverrides from 'themes/overrides'
import useThemeMode from 'hooks/useThemeMode'

interface Props {
  children?: ReactNode
}

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

const ThemeCustomization = ({ children }: Props) => {
  const { themes } = useThemeMode()
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
