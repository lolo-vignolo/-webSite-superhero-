
import { useContext } from 'react';
import { Navigate } from 'react-router';

import { AuthContext } from '../auth/AuthContext';





export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    
    return user.logged
        ? <Navigate to="/marvel" />
        : children
}







export default PublicRoute


// import React from 'react';
// import { Redirect, Route } from 'react-router';
// import PropTypes from 'prop-types';


// const PublicRoute = ({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => {
//     return(
//         <Route {...rest} 
//         component = { (props) => (

//             (!isAuthenticated)
//                 ? (<Component {...props} />)
//                 : (<Redirect to = "/" />)


//         ) }
//         />


        
//     )
  
// }

// PublicRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }
