import React, { useEffect, useState } from 'react'
import CardCar from '../CarCard/CarCard'
import axios from 'axios'

export default function CarSlider({url}) {
    const [cars,setCars] =useState([])
    const [arrow,setArrow] =useState(0);
   
    useEffect(()=>{
        axios.get(`https://true-car-backend-lhjh.onrender.com/${url}`)
        .then((res)=>{
            setCars(res.data.list)
        })
        .catch((e)=>{
            console.log(e)
        })
    },[url])
let width =window.innerWidth
let rightdistance =0
    const rightshift=()=>{
        let cardwidth= document.getElementsByClassName('mycard')[0].getBoundingClientRect().width
       let margin=(width/100)*1.25
       console.log(rightdistance)
       if(rightdistance<=0){
        rightdistance=(cardwidth+margin)*8
         document.getElementsByClassName('carslider-container')[0].style.right=rightdistance+"px"
       }
       else{
        rightdistance-=cardwidth+margin
         document.getElementsByClassName('carslider-container')[0].style.right=rightdistance+"px"
       }
    }
    const leftshifter=()=>{
       let cardwidth= document.getElementsByClassName('mycard')[0].getBoundingClientRect().width
       let margin=(width/100)*1.25
       if(rightdistance<(cardwidth+margin)*8){
        rightdistance+=cardwidth+margin
        document.getElementsByClassName('carslider-container')[0].style.right=rightdistance+"px"
       }
       else{
        rightdistance=0
        document.getElementsByClassName('carslider-container')[0].style.right=rightdistance+"px"
       }
    }
    return (
        <div style={{ backgroundColor: "#e9ecef", paddingTop: "3%" }} className='container-flex'>
            <div className='row'>
                <div className='col-md-1'></div>
                <div style={{ overflowX: "hidden" }} className='col-md-10'>
                    <div className='carslider-container'>
                    {cars.map((i,index)=>{return<CardCar key={index} img={i.image} name={i.name} place={i.place} year={i.year} fuel={i.fuel} totaldriven={i.driven} price={i.price}/>})}
                    </div>
                </div>
                <svg onClick={leftshifter} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right arrow-right-car-slider" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
                <svg onClick={rightshift} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left arrow-left-car-slider" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
                <div className='col-md-1'></div>
            </div>
        </div>
    )
}