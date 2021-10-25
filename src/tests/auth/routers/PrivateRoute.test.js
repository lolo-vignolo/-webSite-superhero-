import React from 'react';
import { mount } from "enzyme";
import PrivateRoute from '../../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router';

describe('pruebas en el componente <PrivateRoute />', () => {

    test('should shows if the component is autenticated y guardar localStorage ', () => {
        // debo copiar o buscar un razonamiento parecido a rest.location.pathname
        const props = {
            location:{
                pathname: "/marvel"
            }
        }

        Storage.prototype.setItem = jest.fn();
        
        const wrapper = mount(
            <MemoryRouter> 
             <PrivateRoute
                isAuthenticated = {true}
                component= {()=><span>Listo</span>}
                {...props}
                  />
            </MemoryRouter>
        )

      expect (wrapper.find("span").exists()).toBe(true);

      expect(localStorage.setItem).toHaveBeenCalledWith("lastPath","/marvel");

        //si lo dejo de esa forma me da un error por que me dice que no puedo usar <Route> 
//fuere de un <Route>, para que se pueda testear los creadores de react, creaton el 
// <MemoryRouter> </MemoryRouter>
// const wrapper = shallow(
//     <PrivateRoute
//        isAuthenticated = {true}
//        component= {()=><span>Listo</span>}
//        {...props}
//          />)
    })
    
    test('bloquear el componete si no esta autenticado', () => {

        const wrapper = mount(
            <MemoryRouter> 
             <PrivateRoute
                isAuthenticated = {false}
                component= {()=><span>Listo</span>}
                {...props}
                  />
            </MemoryRouter>
        )

      expect (wrapper.find("span").exists()).toBe(false);

        
    })
    


    
})
 

