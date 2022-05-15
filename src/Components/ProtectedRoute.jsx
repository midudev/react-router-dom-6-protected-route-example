import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const userDetails = true 
    
	return !userDetails
		? <Navigate to ="/login" />
		: children
  };
 
export default ProtectedRoute;