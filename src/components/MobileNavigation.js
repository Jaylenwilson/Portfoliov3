import React from 'react'
import NavLinks from './NavLinks'
import classes from './NavBar.module.css'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

function MobileNavigation() {
    return (
        <div>
            <nav className={classes.MobileNavigation}>
                <NavLinks />
            </nav>
        </div>
    )
}

export default MobileNavigation
