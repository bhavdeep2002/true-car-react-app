import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Restapi from '../Restapi/Restapi'

export default function RoutingItems({ menu, models }) {
    const [items, setItem] = useState([])
    const {restapi} =useContext(Restapi)
    console.log(restapi)
    useEffect(() => {
        const url = menu.split(' ').join('')
        axios.get(`${restapi}/${url}`)
            .then((res) => {
                setItem(res.data.list)
            })
            .catch((e) => { console.log(e) })
    }, [])
    return (
        <li className="nav-item dropdown mynav-items">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {menu}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {items.map((i, index) => (
                    <li key={index}>
                        <a className="dropdown-item" href="#">
                            {i}
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    );
}
