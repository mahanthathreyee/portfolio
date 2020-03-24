import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import Styles from '../styles/styles.scss'
import { ThemeConstants } from '../Constants';
import ProjectImageHandler from './ProjectImageHandler';



const Projects = () => {
    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.Projects } ${ themeStyle }` } >
            <ProjectImageHandler />
        </div>
    )
}

export default Projects