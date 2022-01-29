import { heroes } from '../data/heroes';


export const getHeroById = ( id = '' ) => {
    console.log('getHeroById called');
    return heroes.find( hero => hero.id === id );
}




// import { heroes } from "../data/heroes";



// export const getHeroById = (id = "") => {


//     //apenas encuentra uno, lo devuelve. No filtra como el otro.
//     return heroes.find( hero => hero.id === id);
  
// }