import routes from './routes/routes.jsx'
import {BrowserRouter, useRoutes} from 'react-router-dom'
function App () {
  const element = useRoutes(routes)
  return element
}

export default () => <BrowserRouter><App /></BrowserRouter>
