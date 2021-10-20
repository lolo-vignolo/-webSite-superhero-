import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

//publisher viene del file heroes.
export const HeroList = ({publisher}) => {

    const heroes = useMemo(() =>  getHeroByPublisher(publisher), [publisher]);

    

    return (
        
            <div className="card columns animate__animated animate__fadeIn">
        
            {heroes.map( hero => (
                    <HeroCard key= {hero.id}
                            {...hero}
                            //   superhero=  {hero.superhero} //podría hacerlo así con cada uno de los props, pero usando los tres puntos que como si lo hago con todos.
                    />
                ))
            }
        </div>
        
    )
}
