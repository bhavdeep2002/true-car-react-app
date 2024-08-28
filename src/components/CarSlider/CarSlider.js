import React from 'react'
import CardCar from '../CarCard/CarCard'

export default function CarSlider() {

    const rightshift=()=>{

    }
    const leftshifter=()=>{
        document.getElementsByClassName('carslider-container')[0].style.right="100px"
    }
    return (
        <div style={{ backgroundColor: "#e9ecef", paddingTop: "3%" }} className='container-flex'>
            <div className='row'>
                <div className='col-md-1'></div>
                <div style={{ overflowX: "hidden" }} className='col-md-10'>
                    <div className='carslider-container'>
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        <CardCar />
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