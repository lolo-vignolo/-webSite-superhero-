import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

//Entre el sistema de rutas principal y uno secundarion, lo unico que la prncipal tiene un router


export const DashboardRoutes = () => {
    return (
        <>

<>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} />

                </Routes>
            </div>
        </>
            
        </>
    )
}


{/* <Navbar />  
            <div className = "container-fluid mt-2 " >
                <Routes>
                    <Route path ="marvel" component={MarvelScreen} />
                    <Route path ="hero/:heroId" component={HeroScreen} />
                    <Route path ="dc" component={DcScreen} />
                    <Route path ="search" component={SearchScreen} />


                <Redirect to="/marvel" />
                </Routes>

            </div> */}
            