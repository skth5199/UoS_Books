import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const PrivateRoute = ({component: Component, publicValue, userRole, ...rest}) => {
    const token = window.localStorage.getItem('token');
    let decodedToken = {}
    let roleFromToken = ""
    if(token){
        decodedToken = jwt_decode(token);
        const {role} = decodedToken;
        roleFromToken = role
    }
    return (
        <Route {...rest} render={props => (
            token || publicValue
                ? userRole === "both" 
                    ? <Component {...props} />
                    : userRole === roleFromToken  
                        ? <Component {...props} />
                        : <Redirect to="/" />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;