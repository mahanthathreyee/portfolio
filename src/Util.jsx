import React, { useRef, useEffect, useState, useContext } from 'react'
import ThemeContext from './ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb as solidLightBulb } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as regularLightBulb } from '@fortawesome/free-regular-svg-icons'
import { IconData, TextColors, ThemeConstants } from './Constants'
import Styles from './styles/styles.scss'

const IconWrapper = (props) => {
    const socialIcon = IconData[props.iconName]
    return(
        <div>
            <a href={ socialIcon.url } title={ socialIcon.name } className={ Styles.Icons }>
                <FontAwesomeIcon icon={ socialIcon.icon } />
            </a>
        </div>
    )
}

const SocialConnect = (props) => {
    const icons = props.icons
    return(
        <div className={ Styles.SocialConnect }>
        {icons.map(
            (iconName, index) => {
                return (
                    <IconWrapper iconName={ iconName } key={ index } />
                )
            }
        )}
        </div>
    )
}

const HeadingCharAnimationOne = (props) => {
    const [currentColor, updateCurrentColor] = useState(false)
    const colorIntervalHandler = useRef(null)

    useEffect(() => {
        if(props['update']) {
            colorIntervalHandler.current = setInterval(() => {
                updateCurrentColor(getRandonColor())
            }, 250)
        } else {
            clearInterval(colorIntervalHandler.current)
        }
    }, [props['update']])

    function getRandonColor() {
        return TextColors[Math.floor(Math.random() * TextColors.length)]
    }

    return (
        <span className={ props['update'] ? getRandonColor() : "" }>{ props['character'] }</span>
    )
}

const HeadingTextAnimationOne = (props) => {
    const textDivRef = useRef(null)
    const [ hoveredState, updateHoveredState ] = useState(false)

    useEffect(() => {
        if(null != textDivRef.current) {
            textDivRef.current.addEventListener("mouseenter", handleMouseEnter, false)
            textDivRef.current.addEventListener("mouseleave", handleMouseLeave, false)

            return () => {
                textDivRef.current.removeEventListener("mouseenter", handleMouseEnter, false)
                textDivRef.current.removeEventListener("mouseleave", handleMouseEnter, false)
            }
        }
    }, [textDivRef.current])

    function handleMouseEnter() {
        updateHoveredState(true)
    }
    
    function handleMouseLeave() {
        updateHoveredState(false)
    }

    return(
        <div ref={ textDivRef } className={ props['name'] }>
            <FontAwesomeIcon icon={ hoveredState ? solidLightBulb : regularLightBulb } />
            {
                props['text'].split('').map((c, i) => {
                    return( 
                        <HeadingCharAnimationOne key={ i } update={ hoveredState } character={ c } />
                    )
                })
            }
        </div>
    )
}

export { SocialConnect, HeadingTextAnimationOne }