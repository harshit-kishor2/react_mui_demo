import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import RootContextProvider from './RootContextProvider'
import ThemeCustomization from './ThemeCostomization'
import GetAllRoutes from 'src/navigation'
import useBasepath, { URL_BASE_PATH } from 'src/hooks/useBasepath'

const App: FC = () => {
  // Replace Base path in url
  useBasepath()
  return (
    <>
      <RootContextProvider>
        <ThemeCustomization>
          <BrowserRouter basename={URL_BASE_PATH}>
            <GetAllRoutes />
          </BrowserRouter>
        </ThemeCustomization>
      </RootContextProvider>
    </>
  )
}

export default App
