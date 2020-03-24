import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import Styles from '../styles/styles.scss'
import { ThemeConstants } from '../Constants';
import Image2 from './Image_2';

const Projects = () => {
    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.Projects } ${ themeStyle }` } >
            <Image2 />
        </div>
    )
}

export default Projects