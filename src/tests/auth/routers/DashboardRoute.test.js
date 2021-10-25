import { mount } from "enzyme"
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../../auth/AuthContext";
import { DashboardRoutes } from "../../../routers/DashboardRoutes";

describe('testeo del componente <DasjboardRoute />', () => {
    test('should mostarrse correctamente ', () => {

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
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
      
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("span").exists()).toBe(true);
        
        
    })
    
    
})
