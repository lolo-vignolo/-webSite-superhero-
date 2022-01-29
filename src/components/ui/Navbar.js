import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';






export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)

    const navigate = useNavigate();


    const handleLogout = () => {
        
        dispatch({ type: types.logout });

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Creators
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        { user.name }
                    </span>
                    
                    <button 
                        className="nav-item nav-link btn " 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}




// import React, { useContext } from 'react';
// import { Link, NavLink , useHistory } from 'react-router-dom';
// import { AuthContext } from '../../auth/AuthContext';
// import { types } from '../../types/types';

// export const Navbar = () => {

//     const {user: {name}, dispatch} =  useContext(AuthContext);

//     // no puedo usar history como en el login por que el logout este dentro de las
//     //dashboardroutes las cuales estan creadas dentro de un Navar y no dentro de un 
//     // router el cual podría brindarnos ese history, por eso react creó el hook useHistory
//     // para estas ocaciones, donde esta el replece, y otros usos.

//     const history = useHistory();

//     const handleLogout = ()=>{

//         const logout = {
//             type : types.logout,
//         }
//         dispatch(logout)
//         history.replace("/login")
        

//     }

//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
         
//             <Link 
//                 className="navbar-brand " 
//                 to="/"
//             >
//                 Asociaciones
//             </Link>
            

//             <div className="navbar-collapse">
//                 <div className="navbar-nav">

//                     <NavLink 
//                         className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        
//                         to="/marvel"
//                     >
//                         Marvel
//                     </NavLink>

//                     <NavLink                         
//                         className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') } 
                        
//                         to="/dc"
//                     >
//                         DC
//                     </NavLink>

//                     <NavLink                        
//                         className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') } 
//                         exact
//                         to="/search"
//                     >
//                         Search
//                     </NavLink>
//                 </div>
//             </div>

//             <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
//                 <ul className="navbar-nav ml-auto">

//                     <span className = "nav-item nav-link text-info" >
//                             {name}
//                     </span>
                
//                     <button 
                    
//                         className="nav-item nav-link btn" 
//                         onClick = {handleLogout}
//                     >
//                         Logout
//                     </button>
//                 </ul>
//            </div> 
          
//         </nav>
//     )
// }









