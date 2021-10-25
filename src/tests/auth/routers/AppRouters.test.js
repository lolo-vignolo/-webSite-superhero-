import { mount} from "enzyme"
import { AuthContext } from "../../../auth/AuthContext";
import { AppRouter } from "../../../routers/AppRouter"


describe('test en mi <AppRouter />', () => {
    test('should shows login screeem if it is not auteticated', () => {
        
        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged: false
            }
            
        }

        const wrapper = mount (
        <AuthContext.Provider value = {contextValue} >
            <AppRouter />
        </AuthContext.Provider>
        );


        expect(wrapper).toMatchSnapshot();
        
    })

    test('should shows Marvel COmponent if it is autenticated', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged: true,
                name : "Lorenzo"
            }
            
        }


        const wrapper = mount (
            <AuthContext.Provider value = {contextValue} >
                <AppRouter />
            </AuthContext.Provider>
            );
    
    
            expect(wrapper.find(".navbar").exists()).toBe(true);

        
    })
    
    
    
})
