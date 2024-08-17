import React, { useEffect, useState } from 'react';
import RoutingItems from '../RoutingItems/RoutingItems';
import axios from 'axios';

export default function Routingfilter() {
 const [menu,setMenu] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/menu')
    .then((res)=>{
      console.log(res.data)
      setMenu(res.data.menu)
    })
    .catch((error)=>console.log(error))
    },[])

  return (
    <div className='container-flex'>
      <div className='row' style={{backgroundColor:"darkblue"}}>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="mynav-bar me-auto mb-2 mb-lg-0">
                  {menu.map((menu, index) => (
                    <RoutingItems key={index} menu={menu} />
                  ))}
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn search" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className='col-md-1'></div>
      </div>
    </div>
  );
}
