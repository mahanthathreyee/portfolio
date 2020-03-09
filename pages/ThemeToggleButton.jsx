import React , { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Styles from '../styles/styles.scss'

function ThemeToggleButton(props) {
    const [ buttonTheme, updateButtonTheme ] = useState( "dark" )
    const timeoutRef = useRef(null);
    
    useEffect(() => {
        if(buttonTheme != "switch"){
            updateButtonTheme("switch")
            timeoutRef.current = setTimeout(() => {
                updateButtonTheme(props.theme == "light" ? "dark" : "light")
            }, 250)
        }
        
    }, [props.theme])

    function ButtonIcon(val) {
        if(val == "light") 
            return Styles.Light
        else if(val == "dark")
            return Styles.Dark
        else    
            return Styles.Switch
    }

    return (
        <div onClick={ props.toggleTheme } className={ `${ Styles.ThemeToggleButton } ${ ButtonIcon( buttonTheme ) }` }>
            <div className={ Styles.ThemeToggleIcon }>
                { buttonTheme == "dark" ? <FontAwesomeIcon icon={ faSun } /> : <FontAwesomeIcon icon={ faMoon } />
                }
            </div>
            <p className={ Styles.ThemeToggleText }>Theme Toggle</p>
        </div>
    )
}

export default ThemeToggleButton