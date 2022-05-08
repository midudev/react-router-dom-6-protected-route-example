import react from 'react'
import routes from './routes/routes.js'
import {BrowserRouter, Route, Routes, Navigate, Router} from 'react-router-dom'
import AppRoute from './Components/AppRoute'
function App () {
  return (
  <BrowserRouter>
    <Routes>
{/*       {routes.map((rout) => ( 
        <AppRoute 
          key={rout.path}
          path={rout.path}
          component={rout.component}
          isPrivate={rout.isPrivate}
          />
      ))} */}
    </Routes>
  </BrowserRouter>

)}

export default App
