import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import ProtectedRoute from '../Components/ProtectedRoute.jsx';

const routes = [
	{
		path: '/login',
		element: (
			<ProtectedRoute>
				<Login />
			</ProtectedRoute>
		)	
	},
	{
		path: '/dashboard',
		element: <Dashboard />
	},
	{
		path: '/*',
		element: <NotFound />
	},
];

export default routes;