import axios from "axios"
import React, { useState, useEffect } from "react"

export default function Category({url,display}) {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/${url}`)
            .then((res) => {
                console.log(res.data.list)
                setList(res.data.list)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])
 if(display){
    return (
        <div className='container-category'>
            {list.map((i, index) => {
                return <div key={index} className='list-items'>{i}</div>
            })}
        </div>
    )
 }
    
}