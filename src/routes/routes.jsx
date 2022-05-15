import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import ProtectedRoute from '../Components/AppRoutes.jsx';

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