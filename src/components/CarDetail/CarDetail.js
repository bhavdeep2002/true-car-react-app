import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Restapi from "../Restapi/Restapi"


export default function CarDetail(){
    const {id} =useParams()
    const {restapi} = useContext(Restapi);
    const [item,setItem] =useState({})

    useEffect(()=>{
        axios.get(`${restapi}/RecentlyAdded/${id}`)
        .then((res)=>{
            console.log(res.data)
            setItem(res.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    },[])
    return(
        <div className="container">
            <div className="row">Home | Buy Car | {item.name}</div>
            <div className="row">
                <div className="col-md-6"><img style={{width:"100%"}} src={item.image} /></div> 
                <div className="col-md-6"><h1>{item.name}</h1> </div>
            </div>
        </div>
    )
}