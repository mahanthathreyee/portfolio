import React, { useState, useRef, useEffect, useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { ThemeConstants } from '../Constants'
import ProjectImageHandler from './ProjectImageHandler'
import { HeadingTextAnimationOne } from '../Util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTerminal } from '@fortawesome/free-solid-svg-icons'
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

const NavItem = (props) => {
    const [ hoveredState, updateHoveredState ] = useState(false)
    const titleDivRef = useRef(null)

    useEffect(() => {
        if(null != titleDivRef.current) {
            titleDivRef.current.addEventListener("mouseenter", handleMouseEnter, false)
            titleDivRef.current.addEventListener("mouseleave", handleMouseLeave, false)

            return () => {
                titleDivRef.current.removeEventListener("mouseenter", handleMouseEnter, false)
                titleDivRef.current.removeEventListener("mouseleave", handleMouseEnter, false)
            }
        }
    }, [titleDivRef.current])

    function handleMouseEnter() {
        updateHoveredState(true)
    }
    
    function handleMouseLeave() {
        updateHoveredState(false)
    }

    return (
        <div ref={ titleDivRef } className={ Styles.NavItem }>
            <FontAwesomeIcon icon={ props.item[0] } />
            <HeadingTextAnimationOne hoveredState={ hoveredState } text={ props.item[1] } />
        </div>
    )
}

const NavItems = () => {
    const items = [[faHome, "Home"], [faTerminal, "Terminal"]]
    return (
        <div className={ Styles.NavItems } >
            {
                items.map((item, i) => {
                    return (
                        <NavItem key={ i } item={ item } />
                    )
                })
            }
        </div>
    )
}

const NavItemsHandler = (props) => {
    return (
        <div className={ `${ Styles.NavItemsHandler } ${ props.navState }` }>
            <ProjectImageHandler animate={ props.animate } />
            <NavItems />
        </div>
    )
}

const NavBar = () => {
    const navIcon = useRef(null)
    const [navState, updateNavState] = useState("")

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