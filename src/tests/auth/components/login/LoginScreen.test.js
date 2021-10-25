import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../../../auth/AuthContext";
import { LoginScreen } from "../../../../components/login/LoginScreen";
import { types } from "../../../../types/types";

describe('prueba en <LoginScreen />', () => {
    test('debe mostrarse correctamente', () => {
        const history = {
            
            replace: jest.fn(),
        }

        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged: true,
                name : "Lorenzo"
            }
        }

        const wrapper = mount (
            <AuthContext.Provider value = {contextValue} >
            <MemoryRouter >

                <LoginScreen history = {history}/>
              
            </MemoryRouter>
            </AuthContext.Provider>
        
        )

        expect(wrapper).toMatchSnapshot();

        wrapper.find("button").prop("onClick")();
        expect(contextValue.dispatch).toHaveBeenCalled();
        expect(history.replace).toHaveBeenCalled();

        //para testear con local storage. ==>

        // localStorage.setItem("lastPath", "/dc")
        // wrapper.find("button").prop("onClick")();
        // expect(history.replace).toHaveBeenCalledWith("/dc");
                
    });


    
    
})
