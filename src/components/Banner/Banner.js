import axios from "axios"
import React, { useEffect, useState } from "react"

export default function Banner() {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/Banner')
            .then((res) => {
                setImages(res.data.images)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])
    return (
        <div className="container-flex">
            <div className="row">
                <div className="col-md-12" style={{ padding: "0px", margin: "0px" }}>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            {images.map((i, index) => (
                                <div key={index} className={index ===0?"carousel-item active":"carousel-item"}>
                                    <img src={i} className="d-block w-100" alt="..." />
                                </div>
                            ))}
                            
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}