import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import useBasepath, { URL_BASE_PATH } from '@hooks/useBasepath'
import GetAllRoutes from '@navigations'
import RootContextProvider from './RootContextProvider'
import ThemeCustomization from './ThemeCostomization'

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
