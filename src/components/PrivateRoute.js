import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import useAuth from '../Auth/useAuth';

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useAuth() 
    const location = useLocation()

    return (
     <Route {...rest}>
         {auth.user ? (
         <Component/>
         ):(
          <Redirect to ={{pathname:"/login", state: { from:location }}}/> 
          )}
        </Route>
    );
}

export default PrivateRoute;