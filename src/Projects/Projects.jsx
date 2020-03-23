import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import Styles from '../styles/styles.scss'
import { ThemeConstants } from '../Constants';
import Image1 from './SVGHandler';

const Projects = () => {
    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.Projects } ${ themeStyle }` } >
            <Image1 />
        </div>
    )
}

export default Projects