import React from 'react';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';


const routes = [
	{
		path: '/login',
		component: Login,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		isPrivate: false,
	},
	{
		path: '/*',
		component: NotFound,
		isPrivate: false,
	},
];
export default routes;