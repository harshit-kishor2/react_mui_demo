import { useRoutes } from 'react-router-dom'
import routes from './routes'
import React, { useEffect } from 'react'

// ==============================|| ROUTING RENDER ||============================== //

const ThemeRoutes = (props: any) => {
  let userDetails = false
  //   useEffect(() => {
  //     stayLogin()
  //     getCountryCode()
  //   }, [])

  //   const userDetails = LocalStorage.getItem(LocalStorage.keys.USER_DETAILS)

  const routing = useRoutes(routes(userDetails))
  return <>{routing}</>
}
export default ThemeRoutes
