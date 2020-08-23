import React, { useState, useRef, useEffect, useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { ThemeConstants } from '../Constants'
import ProjectImageHandler from './ProjectImageHandler'
import Styles from '../styles/styles.scss'

const NavBarIcon = (props) => {
    return (
        <div ref={ props.divRef } className={ Styles.NavBarIconWrapper }>
            <div className={ `${ Styles.NavBarIcon }  ${ props.navState }` } >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

const NavItemsHandler = (props) => {
    return (
        <div className={ `${ Styles.NavItemsHandler } ${ props.navState }` }>
            <ProjectImageHandler animate={ props.animate } />
        </div>
    )
}

const NavBar = () => {
    const navIcon = useRef(null)
    const [navState, updateNavState] = useState(Styles.Open)

    useEffect(() => {
        if(null != navIcon.current) {
            navIcon.current.addEventListener('mousedown', handleClick, false)
            return () => {
                navIcon.current.removeEventListener('mousedown', handleClick, false)
            }
        }
    }, [navIcon.current])

    const handleClick = () => {
        updateNavState(navState => navState == Styles.Open ? "" : Styles.Open)
    }

    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.NavBar } ${ themeStyle }` }>
            <NavBarIcon divRef={ navIcon } navState={ navState } />
            <NavItemsHandler navState={ navState } animate={ navState == Styles.Open } />
        </div>
    )
}

export default NavBar;