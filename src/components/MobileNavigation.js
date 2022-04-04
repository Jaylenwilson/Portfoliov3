import React from 'react'
import NavLinks from './NavLinks'
import classes from './NavBar.module.css'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

function MobileNavigation() {
    return (
        <div className="mobile">
            <nav className={classes.MobileNavigation}>
                <HiOutlineMenuAlt1 className={classes.hamburger} size="40px" position="absolute" left="5%" cursor="pointer" />
                <NavLinks />
            </nav>
        </div>
    )
}

export default MobileNavigation
