import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../auth/AuthContext';






// ...rest , esto representa al path, exact y todas las caractreristicas que veo y uso dentro del <Route />.
const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    
    localStorage.setItem('lastPath', pathname + search );
    
    return user.logged
        ? children
        : <Navigate to="/login" />
}


// el props representa a todos los props que he utilizado lo largo de la aplicacion como, history, location, params, search, etc.  
// componente con mayuscula representa al componente en si , ejemplo a AppRouter.js. 

export default PrivateRoute


// import { Redirect, Route } from 'react-router';
// import PropTypes from 'prop-types';

// const PrivateRoute =({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => {

//     localStorage.setItem("lastPath", rest.location.pathname)
//     return(
//         <Route {...rest} 
//         component = { (props) => (

//             (isAuthenticated)
//                 ? (<Component {...props} />)
//                 : (<Redirect to = "/login" />)

//         ) }
//         />
 
//     )

// }


// PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }
