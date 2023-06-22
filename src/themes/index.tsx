import { ReactNode } from 'react'

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import ComponentsOverrides from './overrides'
import useThemeMode from '../hooks/useThemeMode'

// ==============================|| DEFAULT THEME - MAIN  ||============================== //
interface Props {
  children?: ReactNode
}
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
