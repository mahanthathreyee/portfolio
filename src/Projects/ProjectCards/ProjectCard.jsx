import React, { useContext, useState, useEffect, useRef } from 'react'
import ThemeContext from '../../ThemeContext'
import Styles from '../../styles/styles.scss'
import { ThemeConstants, ProjectData, Github } from '../../Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'


const ProjectIcons = (props) => {
    return(
        <a className={ Styles.ProjectIcons } href={ props.Link }>
            <FontAwesomeIcon icon={ props.Icon } />
            <p className={ Styles.LinkName }>{ props.Name }</p>
        </a>
    )
}

const CardBanner = (props) => {
    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.CardBanner } ${ props.Project['className'] } ${ themeStyle }` }>
            <img src={ props.hoveredState ? props.Project['imageHover'] : props.Project['image'] } />
        </div>
    )
}

const CardDetails = (props) => {
    return(
        <div className={ `${ Styles.CardDetails } ${ props.Project['className'] }` }>
            <h1 className={ Styles.Title }>{ props.Project['title'] }</h1>
            <div className={ Styles.CardLinks }>
                <ProjectIcons Link={ props.Project['url'] } Icon={ faLink } Name="Home" />
                <ProjectIcons Link={ props.Project['github'] } Icon={ faGithub } Name="Github" />
            </div>
        </div>
    )
}

const ProjectCard = () => {
    const [projectIndex, updateProjectIndex] = useState(0)
    const [projectVisibility, updateProjectVisbility] = useState(null)
    const [cardHoveredState, updateCardHoveredState] = useState(false)
    const projectCardRef = useRef(null);

    useEffect(() => {
        if (null != projectCardRef.current) {
            projectCardRef.current.addEventListener("mouseover", handleCardMouseover, false)
            projectCardRef.current.addEventListener("mouseleave", handleCardMouseout, false)
            return () => {
                projectCardRef.current.removeEventListener("mouseover", handleCardMouseover, false)
                projectCardRef.current.removeEventListener("mouseleave", handleCardMouseout, false)
            }
        }
    }, [projectCardRef.current])

    useEffect(() => {
        setTimeout(() => {
            updateProjectVisbility(Styles.ProjectVisible)
        }, 250)

        // To be set more projects come in
        // setInterval(() => {
        //     updateProjectIndex((projectIndex + 1) % ProjectData.length)
        // }, 5000)
    }, [projectVisibility, projectIndex])


    function handleCardMouseover() {
        updateCardHoveredState(true)
    }
    function handleCardMouseout() {
        updateCardHoveredState(false)
    }

    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return (
        <div className={ `${ Styles.ProjectCard } ${ projectVisibility } ${ themeStyle }` }>
            <div ref={ projectCardRef } className={ `${ Styles.Card }` }>
               <CardBanner hoveredState = { cardHoveredState } Project={ ProjectData[projectIndex] } />
               <CardDetails Project={ ProjectData[projectIndex] } />
            </div>
        </div>
    )
}

export default ProjectCard;