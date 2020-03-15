import React, { useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ThemeContext from '../ThemeContext'
import SocialConnect from '../data/SocialIconData'
import HeadingHandler from './Welcome/HeadingHandler'
import { Github, Codepen, ThemeConstants } from '../Constants'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Styles from '../styles/styles.scss'

const Banner = () => {
    const [captionVisibility, updateCaptionVisibility] = useState(null)
    const [arrowVisibility, updateArrowVisibility] = useState(null)

    const displayCaption = () => {
        updateCaptionVisibility(Styles.Visible)
        setTimeout(()=> {
            updateArrowVisibility(Styles.Visible)
        }, 500)
    }

    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.Banner } ${ themeStyle }` }>
            <HeadingHandler animationComplete={ displayCaption }/>
            <div className={ `${ Styles.Caption } ${ captionVisibility }` } >
                <h4>Software Developer</h4>
                <SocialConnect icons={[Github, Codepen]} />
            </div>
            <div className={ `${ Styles.DownArray } ${ arrowVisibility }` }>
                <FontAwesomeIcon className={ Styles.Icon } icon={ faChevronDown } />
                <FontAwesomeIcon className={ Styles.Icon } icon={ faChevronDown } />
                <FontAwesomeIcon className={ Styles.Icon } icon={ faChevronDown } />
            </div>
        </div>
    )
}

export default Banner