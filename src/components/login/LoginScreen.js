import React, { useContext, useReducer } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';




export const LoginScreen = ({history}) => {

    const lastPath = localStorage.getItem("lastPath") || "/";


    const {name} = {
        name:"Lorenzo"
    }
   
    const {dispatch} = useContext(AuthContext);

  
    const handleLogin = ()=>{
        // history.push("/"); 
       
        const login = {
            type : types.login,
            payload:{name}
        }

        dispatch(login)
        history.replace(lastPath);
    } 


    return (
        <div className = "container mt-5">
            <h1>Login</h1>
            <hr />
        
            <button 
            className= "btn btn-secondary"
            onClick = {handleLogin}
            >
               Login  
            </button>
        </div>
    )
}
