import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Restapi from "../Restapi/Restapi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import CarDetailSlider from "../CarDetailSlider/CarDetailSlider"

export default function CarDetail() {
    const { id } = useParams()
    const { restapi } = useContext(Restapi);
    const [item, setItem] = useState({})
    const [icons, setIcons] = useState([])
    const stars = [1, 2, 3, 4, 5]
    let starcolor = 'darkblue'

    useEffect(() => {
        axios.get(`${restapi}/RecentlyAdded/${id}`)
            .then((res) => {
                console.log(res.data)
                setItem(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    useEffect(() => {
        axios.get(`${restapi}/icons`)
            .then((res) => {
                setIcons(res.data.icons)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (<>
        <div className="container">
            <div className="row">Home | Buy Car | {item.name}</div>
            <div className="row">
                <div className="col-md-6">
                    <div style={{ overflowX: "hidden" ,overflowY:"hidden"}} className="container-flex">
                        <div className="row">
                            <div id="carouselExampleIndicators" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={item.image && item.image[0]} className="d-block w-100 cardetail_img" alt="" />
                                    </div>
                                    {item.image && item.image.map((i, index) => {
                                        if (index == 0) return null
                                        return <div key={index} className="carousel-item">
                                            <img src={i} className="d-block w-100 cardetail_img" alt="" />
                                        </div>
                                    })}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <CarDetailSlider img={item} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container-flex">
                        <div className="row">
                            <div className="col-md-12"><h1 style={{ fontWeight: "bold" }}>{item.name}</h1></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12"><div className="place">{item.place}</div></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12"><h2>{item.price}</h2></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">{stars.map((i, index) => { if (i === 5) { starcolor = 'black' } return <FontAwesomeIcon key={index} icon={faStar} style={{ color: starcolor }} /> })}</div>
                        </div>
                        <div className="row">
                            <div style={{ display: "flex", marginTop: "40px" }} className="col-md-12">
                                {icons.map((i, index) => { return <div key={index} className="icons"><img src={i.img} />{item[i.detail]}</div> })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}