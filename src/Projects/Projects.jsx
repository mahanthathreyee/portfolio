import React, { useContext, useState, useEffect } from 'react'
import ThemeContext from '../ThemeContext'
import Styles from '../styles/styles.scss'
import { ThemeConstants } from '../Constants'
import ProjectImageHandler from './ProjectImageHandler'
import ProjectCard from './ProjectCards/ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const Projects = (props) => {
    const [topOfPage, updateTopOfPage] = useState(false)
    const [eventAttached, updateEventAttached] = useState(false)
    const divRef = props.divRef

    useEffect(() => {
        handleScroll()
        if(topOfPage) 
            window.removeEventListener("scroll", handleScroll, true);
        else if(!eventAttached) {
            window.addEventListener("scroll", handleScroll, true);
            updateEventAttached(true)
        }
    })

    const handleScroll = () => {
        const projectDivY = divRef.current.getBoundingClientRect()
        if(projectDivY.y == 0){
            updateTopOfPage(true)
        }
    }
    
    
    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.Projects } ${ themeStyle }` } ref={ divRef } >
            <h1 className={ Styles.Title }>
                <FontAwesomeIcon icon={ faLightbulb } />
                PROJECTS
            </h1>
            {topOfPage &&
                <div className={ Styles.ProjectWrapper }>
                    <ProjectImageHandler />
                    <ProjectCard />
                </div>
            }
           
        </div>
    )
}

export default Projects