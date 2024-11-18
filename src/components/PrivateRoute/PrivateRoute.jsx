import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

	const {user, loading} = useContext(authContext);
	// console.log('private route user', user);
	
	const location = useLocation();
	// console.log(location);

	if(loading){
		return <h2>loading.........</h2>;
	}
	if(!user){
		return <Navigate state={{from:location.pathname}} to='/login'></Navigate>
	}
	return children;
};

export default PrivateRoute;