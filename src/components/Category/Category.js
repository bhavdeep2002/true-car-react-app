import axios from "axios"
import React, { useState, useEffect } from "react"

export default function Category({show,url}) {
    const [list, setList] = useState([])
    useEffect(() => {
        console.log("useeffect "+url)
        axios.get(`http://localhost:8080/${url}`)
            .then((res) => {
                setList(res.data.list)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    if(show){
        return (
            
            <div className='container-category'>
                {list.map((i, index) => {
                    return <div key={index} className='list-items'>{i}</div>
                })}
                {console.log("Category"+url)}
            </div>
        )
    }
        
    }
    