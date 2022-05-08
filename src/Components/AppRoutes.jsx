import React from "react";
import { Navigate, Route } from "react-router-dom";
 
const AppRoutes = ({ component: Component,props, path, isPrivate, ...rest }) => {
	console.log("test")
 
    const userDetails = true
	return (
		<Route
			path={path}
			render={(props) => isPrivate && !Boolean(userDetails) ? (<Navigate replace to='/login'/>) : (<Component {...props} />)}
			{...rest}
		/>)
}
 
export default AppRoutes