import React from 'react'
import { types } from '../types/types';

//estado si el usuario esta autenticado
// const state = {
//     name: "Lorenzo",
//     logged: true
// }


export const authReducer = (state = {}, action ) => {
   
    switch (action.type) {
        case  types.login:
            
            return {
              ...action.payload,
              logged : true
          }
          
        case types.logout:
            
            return{
                logged:false
            }

        default:
        return state;



    }
}
