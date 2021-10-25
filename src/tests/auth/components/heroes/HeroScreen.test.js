import { mount } from "enzyme"
import { MemoryRouter, Route, Router } from "react-router"
import { HeroScreen } from "../../../../components/heroes/HeroScreen"

describe('test component <HeroScreen />', () => {
    


    test('should shows itself correctly ', () => {

        //ver que este history es inventado, simula funciones, pero tiene los parametros fundamentales para que el componente funcione.
        // para ellos me debo fijar en el componente que parametros relacionas a history hay. 
        const history = {
            length : 10,
            push : jest.fn(),
            goBack : jest.fn(),
        }
        //cambio del shallow al mount por que como debo poner el useParam, debo envolver my componente en un higher order component

        const wrapper = mount (
            <MemoryRouter initialEntries={["/hero"]}>

                <HeroScreen history = {history}/>
              
            </MemoryRouter>
        
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("Redirect").exists()).toBe(true);
        
    });

    test('should shows an hero if the params exist and it is found ', () => {
  

        const wrapper = mount (
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Route path = "/hero/:heroId" component = {HeroScreen} />
            </MemoryRouter>
        )

        expect (wrapper.find(".row").exists()).toBe(true)
    });

    test('should return at the back screen using PUSH', () => {
        const history = {
            length : 1,
            push : jest.fn(),
            goBack : jest.fn(),
        }
        
        const wrapper = mount (
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Route
                 path = "/hero/:heroId"
                 component = {(props)=> <HeroScreen history = {history} />}
                 
                  />
            </MemoryRouter>
        )

        wrapper.find("button").prop("onClick")();

        expect(history.push).toHaveBeenCalledWith("/");
        expect(history.goBack).not.toHaveBeenCalled();   



    })

    
    test('should go further using goBaCK', () => {
        const history = {
            length : 10,
            push : jest.fn(),
            goBack : jest.fn(),
        }
        
        const wrapper = mount (
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Route
                 path = "/hero/:heroId"
                 component = {(props)=> <HeroScreen history = {history} />}
                 
                  />
            </MemoryRouter>
        )

        wrapper.find("button").prop("onClick")();

        expect(history.goBack).toHaveBeenCalled();
  



    })

    test('should call Redirect', () => {
        const history = {
            length : 10,
            push : jest.fn(),
            goBack : jest.fn(),
        }
        
        const wrapper = mount (
            <MemoryRouter initialEntries={["/hero/marvel-spider11111111"]}>
                <Route
                 path = "/hero/:heroId"
                 component = {(props)=> <HeroScreen history = {history} />}
                 
                  />
            </MemoryRouter>
        )

        //si el heroe no existe, ese text. no debería de mostrarse nada
        expect(wrapper.text()).toBe("");
  



    })

    
     
    
    
})
