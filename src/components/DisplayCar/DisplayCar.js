import React from "react"

export default function DisplayCar(){
return(
    <div className="container">
        <div className="row">
            <div style={{padding:"0px"}} className="col-md-2">
                <div className="recent">
                    <button style={{backgroundColor:"#e9ecef"}} className="recent-top-rated">Recently Added</button>
                </div>
            </div>
            <div style={{padding:"0px"}} className="col-md-2">
                <div className="top-rated">
                    <button className="recent-top-rated">Top Rated</button>
                </div>
            </div>
            <div className="col-md-8">
                <div className="viewall"><button className="btn btn-primary">View all</button></div>
            </div>
        </div>
    </div>
)
}