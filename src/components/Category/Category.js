import axios from "axios"
import React, { useState, useEffect } from "react"

export default function Category({show,url,widthItem,widthContainer}) {
    const [list, setList] = useState([])
    console.log(widthContainer)
    useEffect(() => {
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
            <div id="container-category" style={{width:widthContainer+"%"}} className='container-category'>
                {list.map((i, index) => {
                    return( 
                    <div style={{width:widthItem+"%",height:"67px"}}  key={index} className='list-items'>
                        <img style={{width:"55%"}} src={`/images/${i}.png`} />{i}              
                    </div>
                    )
                })}          
            </div>
        )
    }
        
    }
    