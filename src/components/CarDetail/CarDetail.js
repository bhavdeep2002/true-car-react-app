import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Restapi from "../Restapi/Restapi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

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

    return (
        <div className="container">
            <div className="row">Home | Buy Car | {item.name}</div>
            <div className="row">
                <div className="col-md-6"><img style={{ width: "100%" }} src={item.image} /></div>
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
                                {icons.map((i, index) => { return <div className="icons"><img src={i} />{item.driven}</div> })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}