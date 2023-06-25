import { useRoutes } from 'react-router-dom'
import routes from './routes'

const GetAllRoutes = () => {
  const element = useRoutes(routes)
  return <>{element}</>
}

export default GetAllRoutes
