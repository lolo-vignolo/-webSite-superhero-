import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

// ...rest , esto representa al path, exact y todas las caractreristicas que veo y uso dentro del <Route />.

const PrivateRoute =({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem("lastPath", rest.location.pathname)
    return(
        <Route {...rest} 
        component = { (props) => (

            (isAuthenticated)
                ? (<Component {...props} />)
                : (<Redirect to = "/login" />)

        ) }
        />
 
    )

}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

// el props representa a todos los props que he utilizado lo largo de la aplicacion como, history, location, params, search, etc.  
// componente con mayuscula representa al componente en si , ejemplo a AppRouter.js. 

export default PrivateRoute
