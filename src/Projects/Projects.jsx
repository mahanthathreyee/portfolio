import React, { useContext, useState, useEffect, useRef } from 'react'
import ThemeContext from '../ThemeContext'
import Styles from '../styles/styles.scss'
import { HeadingTextAnimationOne } from '../Util'
import { ThemeConstants } from '../Constants'
import ProjectCard from './ProjectCards/ProjectCard'
import { faLightbulb as solidLightBulb } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as regularLightBulb } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = (props) => {
    const [topOfPage, updateTopOfPage] = useState(false)
    const [eventAttached, updateEventAttached] = useState(false)
    const [ hoveredState, updateHoveredState ] = useState(false)
    const titleDivRef = useRef(null)
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

    useEffect(() => {
        if(null != titleDivRef.current) {
            titleDivRef.current.addEventListener("mouseenter", handleMouseEnter, false)
            titleDivRef.current.addEventListener("mouseleave", handleMouseLeave, false)

            return () => {
                titleDivRef.current.removeEventListener("mouseenter", handleMouseEnter, false)
                titleDivRef.current.removeEventListener("mouseleave", handleMouseEnter, false)
            }
        }
    }, [titleDivRef.current])

    function handleMouseEnter() {
        updateHoveredState(true)
    }
    
    function handleMouseLeave() {
        updateHoveredState(false)
    }

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
                <div ref={ titleDivRef } className={ Styles.Title }>
                    <FontAwesomeIcon icon={ hoveredState ? solidLightBulb : regularLightBulb } />
                    <HeadingTextAnimationOne hoveredState={ hoveredState } text="PROJECTS" />
                </div>
            </div> 
            {topOfPage &&
                <div className={ Styles.ProjectWrapper }>
                    <ProjectCard />
                </div>
            }
           
        </div>
    )
}

export default Projects