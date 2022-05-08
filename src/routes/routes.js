import React from 'react';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';


const routes = [
	{
		path: '/login',
		element: Login,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		element: Dashboard,
		isPrivate: false,
	},
	{
		path: '/*',
		element: NotFound,
		isPrivate: false,
	},
];
export default routes;