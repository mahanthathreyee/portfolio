import React, { useContext, useState} from 'react'
import SocialConnect from '../data/SocialIconData'
import ThemeContext from '../ThemeContext'
import HeadingHandler from './Welcome/HeadingHandler'
import Styles from '../../styles/styles.scss'

const Banner = () => {
    const [captionVisibility, updateCaptionVisibility] = useState(null)

    const displayCaption = () => {
        console.log('here')
        updateCaptionVisibility(Styles.Visible)
    }

    const themeStyle = useContext(ThemeContext) == "light" ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.Banner } ${ themeStyle }` }>
            <HeadingHandler animationComplete={ displayCaption }/>
            <div className={ `${ Styles.Caption } ${ captionVisibility }` } >
                <h4>Software Developer</h4>
                <SocialConnect icons={['Github', 'Codepen']} />
            </div>
        </div>
    )
}

export default Banner