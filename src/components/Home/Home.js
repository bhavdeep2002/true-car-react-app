import React from 'react'
import Navbar from '../Navbar/Navbar'
import Routingfilter from '../Routingfilter/Routingfilter'
import Banner from '../Banner/Banner'
import Selectbar from '../Selectbar/Selectbar'
import QuickSearch from '../QuickSearch/QuickSearch'
import DisplayCar from '../DisplayCar/DisplayCar'


export default function Home() {
    return (
        <>          
            <Routingfilter />
            <Banner />
            <Selectbar />
            <QuickSearch />
            <DisplayCar/>
        </>
    )
}
