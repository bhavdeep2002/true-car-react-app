import React from 'react'

export default function CardCar() {
    return (
            <div style={{marginRight:"0.5%"}} className="card">
                <img style={{width:"92%",margin:"4% 4% 0% 4%"}} className="card-img-top" src="/images/Vitra Brezza-Card.jpeg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
            )
}