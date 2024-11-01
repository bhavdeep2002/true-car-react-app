import React, { useState } from "react"
import CarSlider from "../CarSlider/CarSlider"

export default function DisplayCar(){

const [CarstoDisplay,setCarstoDisplay]=useState('RecentlyAdded')
const [btnRecent,setRecent]=useState('#e9ecef')
const [btnTopRated,setTopRated]=useState('white')

let seturl=(e)=>{
switch(e.target.innerHTML){
case 'Recently Added':{
    setRecent('#e9ecef')
    setTopRated('white')
    setCarstoDisplay('RecentlyAdded')
    break;
}
case 'Top Rated':{
    setRecent('white')
    setTopRated('#e9ecef')
    setCarstoDisplay('TopRated')
    break
}
default:{
    setCarstoDisplay('Viewall')
    break
}
}
}
return(
    <>
    <div className="container">
        <div className="row">
            <div style={{padding:"0px"}} className="col-md-2">
                <div className="recent">
                    <button onClick={(e)=>seturl(e)} style={{backgroundColor:btnRecent}} className="recent-top-rated">Recently Added</button>
                </div>
            </div>
            <div style={{padding:"0px"}} className="col-md-2">
                <div className="top-rated">
                    <button onClick={(e)=>seturl(e)} style={{backgroundColor:btnTopRated}} className="recent-top-rated">Top Rated</button>
                </div>
            </div>
            <div className="col-md-8">
                <div onClick={(e)=>seturl(e)} className="viewall"><button className="btn btn-primary">View all</button></div>
            </div>
        </div>
    </div>
    <CarSlider url={CarstoDisplay} />
    </>
)
}