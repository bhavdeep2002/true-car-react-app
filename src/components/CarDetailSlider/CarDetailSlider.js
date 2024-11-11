import React from "react";

export default function CarDetailSlider() {
    return (
        <div style={{ width: "132%" }} className="row">
        
            <div className="slider">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                <div className="col-md-2 slider-elements"><img className="sliderdetail" src="/images/Baleno SIGMA.webp" /></div>
                <div className="col-md-2 slider-elements"><img className="sliderdetail" src="/images/Baleno SIGMA_2.webp" /></div>
                <div className="col-md-2 slider-elements"><img className="sliderdetail" src="/images/Baleno SIGMA_3.webp" /></div>
                <div className="col-md-2 slider-elements"><img className="sliderdetail" src="/images/Baleno SIGMA_4.webp" /></div>
                <div className="col-md-2 slider-elements"><img className="sliderdetail" src="/images/Baleno SIGMA_4.webp" /></div>
                <div className="col-md-2 slider-elements"><img className="sliderdetail" src="/images/Baleno SIGMA_4.webp" /></div>
            </div>
        </div>
    )
}