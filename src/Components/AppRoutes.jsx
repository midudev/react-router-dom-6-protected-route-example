import React from "react";
import { Navigate } from "react-router-dom";
import {BrowserRouter, Route, Routes, Router} from 'react-router-dom'
const AppRoutes = ({ element : Element, path, isPrivate, ...rest }) => {
	const userDetails = true 
    
	return (
		<Route {...rest}
			element={(!userDetails && isPrivate)
					? (<Navigate to ="/login" />)
					: (<Navigate to ="/login" /> )
		}
	  />
	)
  };
 
export default AppRoutes;