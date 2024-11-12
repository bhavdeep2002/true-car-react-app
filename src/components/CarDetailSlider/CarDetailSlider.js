import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SliderShift from "../SliderShift/SliderShift"

const displacement=(dir)=>{
    let w =document.getElementsByClassName('slider-elements')[0].getBoundingClientRect().width
    let classname ="slider"
    SliderShift(w+20,classname,dir)
}

export default function CarDetailSlider(img) {
     console.log(img)
    return (<>
        <div style={{ width: "132%" }} className="row">
            <div className="slider"> 
              {img.map((i,index)=>{return <div className="col-md-2 slider-elements"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${index}`} className="active btn_noborder" aria-current="true" aria-label={`Slide ${index+1}`}><img className="sliderdetail rounded mx-auto d-block" src={i} /></button></div>})}
            </div>
        </div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3"><FontAwesomeIcon onClick={()=>displacement(2)} style={{width:"50px",height:"50px",color:"darkblue"}} icon={faCaretLeft} beat/></div>
            <div className="col-md-3"><FontAwesomeIcon onClick={()=>displacement(1)} style={{width:"50px",height:"50px",color:"darkblue"}} icon={faCaretRight} beat /></div>
            <div className="col-md-3"></div>
        </div>
        </>
    )
}