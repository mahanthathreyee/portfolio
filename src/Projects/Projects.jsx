import React, { useContext, useState, useEffect } from 'react'
import ThemeContext from '../ThemeContext'
import Styles from '../styles/styles.scss'
import { HeadingTextAnimationOne } from '../Util'
import { ThemeConstants } from '../Constants'
import ProjectImageHandler from './ProjectImageHandler'
import ProjectCard from './ProjectCards/ProjectCard'

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
            <div className={ Styles.TitleWrapper }>
                <HeadingTextAnimationOne name={ Styles.Title } text="PROJECTS" />
            </div> 
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