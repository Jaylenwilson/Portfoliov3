import React from 'react'
import { Link } from 'react-router-dom'


function NavLinks() {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
        </div>
    )
}

export default NavLinks
