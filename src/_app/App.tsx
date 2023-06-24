import GetAllRoutes from 'navigation'
import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RootContextProvider from './RootContextProvider'
import ThemeCustomization from './ThemeCostomization'

const App: FC = () => {
  return (
    <>
      <RootContextProvider>
        <ThemeCustomization>
          <BrowserRouter>
            <GetAllRoutes />
          </BrowserRouter>
        </ThemeCustomization>
      </RootContextProvider>
    </>
  )
}

export default App
