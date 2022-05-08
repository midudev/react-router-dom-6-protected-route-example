import react from 'react'
import routes from './routes/routes.js'
import {BrowserRouter, Route, Routes, Navigate, Router, Outlet} from 'react-router-dom'
import AppRoutes from './Components/AppRoutes'
function App () {
  return (
    
  <BrowserRouter>
    <Routes>
       {routes.map((rout) => ( 
         console.log(rout),
        <AppRoutes 
          key={rout.path}
          path={rout.path}
          element={rout.element}
          isPrivate={rout.isPrivate}
          />
      ))}
    </Routes>
  </BrowserRouter>
)}

export default App
