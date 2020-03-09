import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from '../../styles/styles.scss'
import SocialIconData from '../data/SocialIconData'
import ThemeContext from '../ThemeContext'

const SocialConnect = () => {
    return(
        <div className={ Styles.SocialConnect }>
            {SocialIconData.map( 
                (socialIcon) => {
                    return (
                        <a href={ socialIcon.url } title={ socialIcon.name } className={ Styles.Icons }>
                            <FontAwesomeIcon icon={ socialIcon.icon } />
                        </a>
                    )
                }
            )}
        </div>
    )
}

const Banner = () => {
    const themeStyle = useContext(ThemeContext) == "light" ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${Styles.Banner} ${themeStyle}` }>
            <h1 className={ Styles.Name }>Maganth Seetharaman</h1>
            <h4 className={ Styles.Caption }>Software Developer</h4>
            <SocialConnect />
        </div>
    )
}

export default Banner