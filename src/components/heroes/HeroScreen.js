import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById as getHeroesById } from '../../selectors/getHeroById';


export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate = useNavigate()

    const hero = useMemo( () => getHeroesById(heroeId), [ heroeId ]);
    
    console.log(hero);

    const handleReturn = () => {
        navigate( -1 );
    }


    if (!hero) {
        return <Navigate to='/' />
    }
    
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    console.log(id);
    const imagePath = `/assets/${ id }.jpg`;
   
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imagePath } 
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> { alter_ego } </li>
                    <li className="list-group-item"> <b>Publisher:</b> { publisher } </li>
                    <li className="list-group-item"> <b>First Appearance:</b> { first_appearance } </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar 
                </button>

            </div>

        </div>
    )
}



// import React, { useMemo } from 'react';
// import { Redirect, useParams } from 'react-router';
// import { getHeroById } from '../../selectors/getHeroById';

// export const HeroScreen = ({history}) => {

//     // este useParam es un customHook de react que sirve para obtener informacion de esa lista de 
//     // items que encuentro en el components de mi sitio web. heroId es uno de esos items.
//     //useParam va a extraer los parametros que vayan por el URL.

//     const {heroId} = useParams();
   
    

//     const hero = useMemo(() =>  getHeroById(heroId), [heroId])

//     console.log(hero);

//     if (!hero){
//         return <Redirect to="/" />;
//     }

//     const handleReturn = ()=>{
//         if(history.length <= 2){
//             history.push("/");
//         }else{
//             history.goBack();
//         }

//     // this history.goBack() is inside of HeroScreen in components in the console. There I´ll find the different acctions 
//     //that I can carry out with my button. 
       
        
//     } 

//     const {
//         superhero,
//         publisher,
//         alter_ego,
//         first_appearance,
//         characters,
//     } = hero
    
   


//     return (
//         <div className="row mt-5">
//             <div className = "col-4"> 
//                 <img
//                 src={`../assets/heroes/${heroId}.jpg`}
//                 alt = {superhero}
//                 className = "img-thumbnail animate__animated animate__fadeInLeft"
//                 />
             
//             </div>
//             <div className = "col-8">
//             <h3>{superhero}</h3>
//             <ul className= "list-group list-group-flush">
//                 <li className = "list-group-item"><b>Alter ego:</b> {alter_ego}</li>
//                 <li className = "list-group-item"><b>publisher:</b> {publisher}</li>
//                 <li className = "list-group-item"><b>first appearance:</b> {first_appearance}</li>
//             </ul>

//             <h5> characters: </h5>
//             <p>{characters} </p>

//             <button 
//                 className="btn btn-outline-info"
//                 onClick = {handleReturn}
//                 >
//                 Return

//             </button>


//             </div>

//         </div>
//     )
// }
