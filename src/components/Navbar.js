// import { Link } from 'react-router-dom'
import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import classes from './NavBar.module.css'
function Navbar() {
    return (
        <div className={classes.NavBar}>
            <MobileNavigation />
            <Navigation />
        </div>

    )
}
export default Navbar


{/* <div id="navbar"> */ }
{/* <li>
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
                </li> */}
                // </div>