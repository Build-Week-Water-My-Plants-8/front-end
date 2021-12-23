import React from "react";
import { Route} from "react-router-dom";
import { Navigate } from "react-router";
function PrivateRoute({ children }) {
 const token = localStorage.getItem('token');
 return token ? children : <Navigate to='/login' />
}

export default PrivateRoute;