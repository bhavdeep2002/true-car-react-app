import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import Restapi from '../Restapi/Restapi'

export default function Category({show,url,widthItem,widthContainer}) {
    const [list, setList] = useState([])
    const {restapi} =useContext(Restapi)
    useEffect(() => {
       
        axios.get(`${restapi}/${url}`)
            .then((res) => {
                setList(res.data.list)
            })
            .catch((e) => {
                console.log(e)
            })

    }, [])
    if(show){
        console.log(list)
        return (       
            <div id="container-category" style={{width:widthContainer+"vw"}} className='container-category'>
                {list.map((i, index) => {
                   if(url==='ByPrice'){
                    return( 
                        <div style={{width:widthItem+"%",height:"80px",paddingTop:"23px",textAlign:"center",fontSize:"20px",fontWeight:"bold",color:"darkblue"}}  key={index} className='list-items'>
                            {i}              
                        </div>
                        )
                   }
                   else{
                    return( 
                        <div style={{width:widthItem+"%",height:"80px"}}  key={index} className='list-items'>
                            <img style={{width:"52%",marginTop:"5px"}} src={`/images/${i}.WEBP`} />{i}              
                        </div>
                        )
                   }
                })}          
            </div>
        )
    }
        
    }
    
