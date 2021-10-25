
import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Puebas en el authReducer ', () => {

    //es una funcion, no es un componente por eso no debo usar shallow

    test('should shows the default statement ', () => {

        const estadoInicial = {
            logged:false
        }

        const result = authReducer({estadoInicial}, {})

        expect (result).toEqual({estadoInicial})

        
    })


    test('should autenticate the name and user statement', () => {

        // por defaul el type.login me devuelve un objeto con name y type, agregandole el payload name, cambio ese name.
        const accion = {
            type: types.login,
            payload : {
                name : "Alfon"
            }
            
            }
        
               const state = authReducer({logged:false}, accion)


               expect (state).toEqual({logged:true , name : "Alfon"})
    })

    test('should autenticate the name and user statement', () => {

        // por defaul el type.login me devuelve un objeto con name y type, agregandole el payload name, cambio ese name.
        const accion = {
            type: types.logout
            }
        
               const state = authReducer({logged:true , name : "Alfon"}, accion)


               expect (state).toEqual({logged:false })
    })




    
    
    
})
