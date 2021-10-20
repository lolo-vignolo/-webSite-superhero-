import React, { useContext } from 'react';
import { Link, NavLink , useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const {user: {name}, dispatch} =  useContext(AuthContext);

    // no puedo usar history como en el login por que el logout este dentro de las
    //dashboardroutes las cuales estan creadas dentro de un Navar y no dentro de un 
    // router el cual podría brindarnos ese history, por eso react creó el hook useHistory
    // para estas ocaciones, donde esta el replece, y otros usos.

    const history = useHistory();

    const handleLogout = ()=>{

        const logout = {
            type : types.logout,
        }
        dispatch(logout)
        history.replace("/login")
        

    }



    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
          <div className = "navbar-nav p-2">
            <Link 
                className="navbar-brand " 
                to="/"
            >
                Asociaciones
            </Link>
            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2"> */}
                <ul className="navbar-nav ml-auto">

                    <span className = "nav-item nav-link text-info" >
                            {name}
                    </span>
                
                    <button 
                    
                        className="nav-item nav-link btn" 
                        onClick = {handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            {/* </div> */}
          
        </nav>
    )
}