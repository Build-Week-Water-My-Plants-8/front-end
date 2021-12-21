import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
function PrivateRoute({component: Component, ...rest}) {
  //const naviate = useNavigate();
  return (<Route {...rest} render={() => {
  if(localStorage.getItem('token')){
    return (<Component/>)
  } else {
    return <Redirect to={'/login'}/> //navigate('/login');
  }
  }
  }/>);
}

export default PrivateRoute;