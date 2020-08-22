import React , { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeConstants, InitalThemeButton } from './Constants'
import Styles from './styles/styles.scss'

const ButtonSwitchState = "switch"

function ThemeToggleButton(props) {
    const [ buttonTheme, updateButtonTheme ] = useState( InitalThemeButton )
    const timeoutRef = useRef(null);
    
    useEffect(() => {
        if(buttonTheme != ButtonSwitchState){
            updateButtonTheme(ButtonSwitchState)
            timeoutRef.current = setTimeout(() => {
                updateButtonTheme(props.theme == ThemeConstants.Light ? ThemeConstants.Dark : ThemeConstants.Light)
            }, 250)
        }
        
    }, [props.theme])

    function ButtonIcon(val) {
        if(val == ThemeConstants.Light) 
            return Styles.Light
        else if(val == ThemeConstants.Dark)
            return Styles.Dark
        else    
            return ""
    }

    return (
        <div onClick={ props.toggleTheme } className={ `${ Styles.ThemeToggleButton } ${ ButtonIcon( buttonTheme ) }` }>
            <div className={ Styles.ThemeToggleIcon }>
                { buttonTheme == ThemeConstants.Dark ? <FontAwesomeIcon icon={ faSun } /> : <FontAwesomeIcon icon={ faMoon } /> }
            </div>
            <p className={ Styles.ThemeToggleText }>Theme Toggle</p>
        </div>
    )
}

export default ThemeToggleButton