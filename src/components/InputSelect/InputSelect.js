import axios from "axios"
import React, { useEffect, useState } from "react"

export default function InputSelect({selected}) {
    const [list,setList]=useState([])
    useEffect(()=>{
        let url
        if(selected==="Select Model"){
            url ="ByModel"
        }
        else if(selected==="Select Budget"){
            url="ByPrice"
        }
        else {
             url="ByCity"
        }
        axios.get(`http://localhost:8080/${url}`)
        .then((res)=>{
            setList(res.data.list)
        })
        .catch(()=>{

        })
    },[])
    return (
        <div className="selectinput">
            <select className="form-select my-form-select" aria-label="Default select example">
                <option>{selected}</option>
                {list.map((i,index)=>{
                    return <option key={index}>{i}</option>
                })}
            </select>
        </div>
    )
}