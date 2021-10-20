import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

//Entre el sistema de rutas principal y uno secundarion, lo unico que la prncipal tiene un router


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />  
            <div className = "container-fluid mt-2 " >
                <Switch>
                <Route exact path ="/marvel" component={MarvelScreen} />
                <Route exact path ="/hero/:heroId" component={HeroScreen} />
                <Route exact path ="/dc" component={DcScreen} />
                <Route exact path ="/search" component={SearchScreen} />


                <Redirect to="/marvel" />
                </Switch>

            </div>
            
        </>
    )
}
