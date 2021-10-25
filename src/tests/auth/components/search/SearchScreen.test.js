import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { SearchScreen } from "../../../../components/search/SearchScreen"

describe('teste de mi componente <SearchScreen />', () => {
 
    // const history = {
    //     length : 10,
    //     push : jest.fn(),
    //     goBack : jest.fn(),
    //     location:{}
    //}
    test('should show a default screen', () => {
        
        const wrapper = mount (
            <MemoryRouter initialEntries = {["/search"]}>

                <Route  path = "/search" component={SearchScreen}/>
              
            </MemoryRouter>
        
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".alert-info").text().trim()).toBe("searcha a hero")
    })

    test('should show to Batman and an imput with a value of  queryScreen', () => {
        
        const wrapper = mount (
            <MemoryRouter initialEntries = {["/search?q=batman"]}>

                <Route  path = "/search" component={SearchScreen}/>
              
            </MemoryRouter>
        
        )

        
        expect(wrapper.find("input").prop("value")).toBe("batman");
        expect(wrapper).toMatchSnapshot();
    })

    test('should show an error if the hero is not found', () => {
        const q = "batman!!!"
        const wrapper = mount (
            <MemoryRouter initialEntries = {[`/search?q=${q}`]}>

                <Route  path = "/search" component={SearchScreen}/>
              
            </MemoryRouter>
        
        )

        
        expect(wrapper.find(".alert-danger").text().trim()).toBe(`there is not a hero with ${q} name.`);
       
    })

    test('should calls push from history ', () => {
        const history = {
            push : jest.fn(),
        };

        const wrapper = mount (
            <MemoryRouter initialEntries = {[`/search?q=${q}`]}>

                <Route  path = "/search" component={()=> <SearchScreen history = {history} />}/>
              
            </MemoryRouter>
        
        )

        // diferencia entre simulate y props
        // => el simulate es mas recomentable cuando quiero escribir algo o interactuar, por ejemplo en el imput.
        // => el props es mas util, cuando solo necesito llamarlo.
        
        //a) aqui hago el cambio en la caja de texto.
        wrapper.find("imput").simulate("change",{
            target:{
                name:"superhero",
                value: "batman"
            }
        });

        // b ) aqui hacemos el submit del formulario
        wrapper.find("form").prop("onSubmit")({
            preventDefault(){}
        })


        //aqui esta cambiando el URL, el push en este caso cambia el URL.
        expect(history.push).toHaveBeenCalledWith("?q=batman")
    })
    


    
    
    
})
