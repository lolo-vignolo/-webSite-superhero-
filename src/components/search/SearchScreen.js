import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/FromHook';
import { HeroCard } from '../heroes/HeroCard';
import queryString from "query-string";
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const {q = ""} = queryString.parse(location.search);
   


    const [values, handleImputChange,] = useForm({ 
        superhero: q , 
    });
    
    const {superhero} = values
    //superhero es el value del imput

    const heroesFiltered = useMemo(() => getHeroByName (q), [q])
    

    const handleSearch = (event)=> {
        event.preventDefault();
        history.push(`?q=${superhero}`);
    }

    return (
        <div>
            <h1>Search Screen </h1>
            <hr />
            <div className = " row">

                <div className = "col-5">
                    <h4> Search form</h4>
                    <hr />

                    <form onSubmit = {handleSearch} >
                       <input 
                       type = "text"
                       name = "superhero"
                       value = {superhero}
                       placeholder = "Find your hero"
                       className = " form-control"
                       onChange = {handleImputChange}
                       />
                        <button
                        type = "submit"
                        className = "btn m-1 btn-outline-primary btn-block"
                        >
                            Search...
                        </button>

                    </form>
                </div>

                <div className = "col-7">

                <h4> Results</h4>
                <hr />

                {
                    (q === "") &&
                    <div className = "alert alert-info"> 
                        searcha a hero
                    </div>
                }
                {
                    (q !== "" && heroesFiltered.length === 0) &&
                    <div className = "alert alert-danger"> 
                        there is not a hero with {q} name.
                    </div>
                }



                {
                    heroesFiltered.map(hero => (
                        <HeroCard
                            ket = {hero.id}
                            {...hero}

                        />
                    ))
                }


                </div>
            </div>

        </div>
    )
}
