import React from 'react'

export default function CardCar({img ,name,place,year,fuel,totaldriven,price}) {
    return (
            <div className="card mycard">
                <img style={{width:"92%",margin:"4% 4% 0% 4%",height:"100%"}} className="card-img-top" src={img} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{place}</p>
                        <p className="card-text">{year} | {fuel} | {totaldriven}</p>
                        <p className='card-text'>₹ {price}</p>
                    </div>
            </div>
            )
}