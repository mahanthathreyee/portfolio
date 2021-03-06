import React, { useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ThemeContext from '../ThemeContext'
import { SocialConnect } from '../Util'
import HeadingHandler from './Welcome/HeadingHandler'
import BackgroundImage from './BackgroundImage'
import { Github, Codepen, LinkedIn, ThemeConstants, BannerAnimationEnd } from '../Constants'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Styles from '../styles/styles.scss'

const Banner = (props) => {
    const [captionVisibility, updateCaptionVisibility] = useState(null)
    const [arrowVisibility, updateArrowVisibility] = useState(null)

    const displayCaption = () => {
        updateCaptionVisibility(Styles.Visible)
        setTimeout(()=> {
            props.animationComplete(BannerAnimationEnd)
            updateArrowVisibility(Styles.Visible)
        }, 500)
    }

    const scrollToProject = () => {
        props.projectRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.Banner } ${ themeStyle }` }>
            <BackgroundImage />
            <div className={ `${ Styles.Caption } ${ captionVisibility }` } >
                <h4>Hi there! I am</h4>
            </div>
            <HeadingHandler animationComplete={ displayCaption } />
            <div className={ `${ Styles.Caption } ${ captionVisibility }` } >
                <SocialConnect icons={[Github, Codepen, LinkedIn]} />
            </div>
            <div onClick={ scrollToProject } className={ `${ Styles.DownArray } ${ arrowVisibility }` }>
                <FontAwesomeIcon className={ Styles.Icon } icon={ faChevronDown } />
                <FontAwesomeIcon className={ Styles.Icon } icon={ faChevronDown } />
                <FontAwesomeIcon className={ Styles.Icon } icon={ faChevronDown } />
            </div>
        </div>
    )
}

export default Banner