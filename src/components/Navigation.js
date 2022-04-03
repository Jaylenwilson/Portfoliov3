import React from 'react'
import NavLinks from './NavLinks'
import classes from './NavBar.module.css'
function Navigation() {
    return (
        <div>
            <nav className={classes.Navigation}>
                <NavLinks />
            </nav>
        </div>
    )
}

export default Navigation
