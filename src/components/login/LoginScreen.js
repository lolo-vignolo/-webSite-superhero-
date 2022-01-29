import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext )

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: { name: 'Lorenzo' }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';


        navigate( lastPath, {
            replace: true
        });
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-secondary"
                onClick={ handleLogin }
                >
                    Login
            </button>
        </div>
    )
}
// import React, { useContext } from 'react';
// import { AuthContext } from '../../auth/AuthContext';


// import { types } from '../../types/types';




// export const LoginScreen = ({history}) => {

//     const lastPath = localStorage.getItem("lastPath") || "/";


//     const {name} = {
//         name:"Lorenzo"
//     }
   
//     const {dispatch} = useContext(AuthContext);

  
//     const handleLogin = ()=>{
//         // history.push("/"); 
       
//         const login = {
//             type : types.login,
//             payload:{name}
//         }

//         dispatch(login)
//         history.replace(lastPath);
//     } 


//     return (
//         <div className = "container mt-5">
//             <h1>Login</h1>
//             <hr />
        
//             <button 
//             className= "btn btn-secondary"
//             onClick = {handleLogin}
//             >
//                Login  
//             </button>
//         </div>
//     )
// }
