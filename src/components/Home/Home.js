import React from 'react'
import Navbar from '../Navbar/Navbar'
import Routingfilter from '../Routingfilter/Routingfilter'
import Banner from '../Banner/Banner'

export default function Home(){
    return(
        <>
        <Navbar />
        <Routingfilter />
        <Banner />
        </>
    )
}