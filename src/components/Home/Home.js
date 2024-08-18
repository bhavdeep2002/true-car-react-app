import React from 'react'
import Navbar from '../Navbar/Navbar'
import Routingfilter from '../Routingfilter/Routingfilter'
import Banner from '../Banner/Banner'
import Selectbar from '../Selectbar/Selectbar'
import QuickSearch from '../QuickSearch/QuickSearch'

export default function Home() {
    return (
        <>
            <Navbar />
            <Routingfilter />
            <Banner />
            <Selectbar />
            <QuickSearch />
        </>
    )
}