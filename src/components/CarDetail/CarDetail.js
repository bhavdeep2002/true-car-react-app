import React from "react"
import { useParams } from "react-router-dom"

export default function CarDetail(){
    const {name} =useParams()
    return(<>
        {name}
        </>)
}