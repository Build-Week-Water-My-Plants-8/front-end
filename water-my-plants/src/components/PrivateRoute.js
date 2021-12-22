import React from "react";
import { Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function PrivateRoute({component: Component, ...rest}) {
 const navigate = useNavigate();
  return (<Route {...rest} render={() => {
  if(localStorage.getItem('token')){
    return (<Component/>)
  } else {
    return navigate('/');
  }
  }
  }/>);
}

export default PrivateRoute;