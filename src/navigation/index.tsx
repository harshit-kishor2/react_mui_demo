import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

const GetAllRoutes = () => {
  const routing = useRoutes(routes)
  return <>{routing}</>
}

export default GetAllRoutes
