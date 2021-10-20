import React from 'react'
import { heroes } from '../data/heroes'


export const getHeroByName = (name) => {
    name = name.toLocaleLowerCase();

    if (name === ""){
        return []
    }else{
        return heroes.filter(hero=> hero.superhero.toLocaleLowerCase().includes(name))
    }
      
}

