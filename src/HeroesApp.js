
import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

//este init busca a ver si ya hay alguien en este caso logeado, si no lo encuentra 
//queda en estado logout. Por eso busca en el localStorag que es un objeto que lo
//veo con los componentes en lapagina web. los trangormo a JSON y asi puedo trabajarlo.

const init = ()=>{
    return JSON.parse(localStorage.getItem("user")) || {
        logged:false
    }
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    // en esta forma busco en el local storage el item "user" y le configuro el name que 
    // esta en user, este queda configurado con ese valor el cual va a cambiar solo si cambia 
    // el valor del user.

    useEffect(() => {
        if ( !user ) return;

        localStorage.setItem('user', JSON.stringify(user) );
    }, [ user ])

    // useEffect(() => {
    //     localStorage.setItem("user", JSON.stringify(user))
    // }, [user])
   
    return (
        <>

        <AuthContext.Provider value= {{user, dispatch}}>

            <AppRouter />

        </AuthContext.Provider>

           
        </>
    )
}
