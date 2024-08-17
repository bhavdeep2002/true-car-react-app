import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function RoutingItems({ menu, models }) {
    const [items, setItem] = useState([])
    useEffect(() => {
        const url = menu.split(' ').join('')
        axios.get(`http://localhost:8080/${url}`)
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
