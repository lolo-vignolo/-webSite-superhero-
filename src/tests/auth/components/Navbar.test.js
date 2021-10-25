import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import { AuthContext } from "../../../auth/AuthContext"
import { Navbar } from "../../../components/ui/Navbar"
import { types } from "../../../types/types"

describe('pruebas en  componente <Navbar />', () => {

    const historyMock = {
        push:jest.fn(),
        replace : jest.fn(),
        location: {},
        lsiten:jest.fn(),
        createHref: jest.fn(),
    }

    test('should show it properly ', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged: true,
                name : "Lorenzo"
            }
        }

        const wrapper = mount ( 
            <AuthContext.Provider value = {contextValue} >
            <MemoryRouter> 
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
        
         )
        

         expect(wrapper).toMatchSnapshot();
         expect(wrapper.find(".text-info").text().trim()).toBe("Lorenzo")
    });

    test('should calls to logout and history ', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged: true,
                name : "Lorenzo"
            }
        }

        const wrapper = mount ( 
            <AuthContext.Provider value = {contextValue} >
            <MemoryRouter> 
                <Router history = {historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
        
         );

         afterEach(()=>{
            jest.clearAllMocks();
        });


         //find encuentra al button, que dentro tiene un prop onClick, que al tocar este llama a una funcion ().
        wrapper.find("button").prop("onClick")();

        expect (contextValue.dispatch).toHaveBeenCalledWith({
            type:types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith("/login");



       


        
    })
    
    
})
