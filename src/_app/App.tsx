import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeModeProvider } from '../contexts/themeContext/ThemeModeProvider'
import ThemeCustomization from '../themes'

interface Props {}

const App: FC<Props> = () => {
  return (
    <>
      <ThemeModeProvider>
        <ThemeCustomization>
          <BrowserRouter>hello</BrowserRouter>
        </ThemeCustomization>
      </ThemeModeProvider>
    </>
  )
}

export default App
