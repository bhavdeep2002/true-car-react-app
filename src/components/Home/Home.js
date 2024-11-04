import React from 'react'
import Navbar from '../Navbar/Navbar'
import Routingfilter from '../Routingfilter/Routingfilter'
import Banner from '../Banner/Banner'
import Selectbar from '../Selectbar/Selectbar'
import QuickSearch from '../QuickSearch/QuickSearch'
import DisplayCar from '../DisplayCar/DisplayCar'
import Restapi from '../Restapi/Restapi'

export default function Home() {
    const apiUrl = process.env.REACT_APP_API_URL; // Access the environment variable directly
    console.log(apiUrl)
    return (
        <Restapi.Provider value={{ restapi: apiUrl }}>     
            <Navbar />
            <Routingfilter />
            <Banner />
            <Selectbar />
            <QuickSearch />
            <DisplayCar />  
        </Restapi.Provider>
    )
}
