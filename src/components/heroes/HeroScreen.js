import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const {heroId} = useParams();

    const hero = useMemo(() =>  getHeroById(heroId), [heroId])
    

    if (!hero){
        return <Redirect to="/" />;
    }

    const handleReturn = ()=>{
        if(history.length <= 2){
            history.push("/");
        }else{
            history.goBack();
        }

    // this history.goBack() is inside of HeroScreen in components in the console. There I´ll find the different acctions 
    //that I can carry out with my button. 
       
        
    } 

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero
    
   


    return (
        <div className="row mt-5">
            <div className = "col-4"> 
                <img
                src={`../assets/heroes/${heroId}.jpg`}
                alt = {superhero}
                className = "img-thumbnail animate__animated animate__fadeInLeft"
                />
             
            </div>
            <div className = "col-8">
            <h3>{superhero}</h3>
            <ul className= "list-group list-group-flush">
                <li className = "list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                <li className = "list-group-item"><b>publisher:</b> {publisher}</li>
                <li className = "list-group-item"><b>first appearance:</b> {first_appearance}</li>
            </ul>

            <h5> characters: </h5>
            <p>{characters} </p>

            <button 
                className="btn btn-outline-info"
                onClick = {handleReturn}
                >
                Return

            </button>


            </div>

        </div>
    )
}
