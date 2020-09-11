import React, { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconData, TextColors } from './Constants'
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
    const [currentColor, updateCurrentColor] = useState("")
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
        <span className={ props['update'] ? currentColor : "" }>{ props['character'] }</span>
    )
}

const HeadingTextAnimationOne = (props) => {
    return(
        <div>
            {
                props['text'].split('').map((c, i) => {
                    return( 
                        <HeadingCharAnimationOne key={ i } update={ props.hoveredState } character={ c } />
                    )
                })
            }
        </div>
    )
}

const GetRandomInt = (min, max) => {
    return Math.random() * (max - min) + min
}

export { SocialConnect, HeadingTextAnimationOne, GetRandomInt }