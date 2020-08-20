import React, { useContext, useState, useEffect, useRef } from 'react'
import ThemeContext from '../../ThemeContext'
import Styles from '../../styles/styles.scss'
import { ThemeConstants, ProjectData, Github } from '../../Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'


const ProjectIcons = (props) => {
    let domElement = props.Link ? <a className={ Styles.ProjectIcons } href={ props.Link }><FontAwesomeIcon icon={ props.Icon } /><p className={ Styles.LinkName }>{ props.Name }</p></a> : null
    
    return(
        domElement
    )
}

const CardBanner = (props) => {
    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return(
        <div className={ `${ Styles.CardBanner } ${ themeStyle }` }>
            <img src={ props.Project['image'] } />
        </div>
    )
}

const CardDetails = (props) => {
    return(
        <div className={ `${ Styles.CardDetails }` }>
            <h1 className={ Styles.Title }>{ props.Project['title'] }</h1>
            <div className={ Styles.CardLinks }>
                <ProjectIcons Link={ props.Project['url'] } Icon={ faLink } Name="Home" />
                <ProjectIcons Link={ props.Project['github'] } Icon={ faGithub } Name="Github" />
            </div>
        </div>
    )
}

const Card = (props) => {
    const CardRef = useRef(null)

    useEffect(() => {
        if(null != CardRef.current) {
            CardRef.current.addEventListener('mousedown', handleClick, false)
            return () => {
                CardRef.current.removeEventListener('mousedown', handleClick, false)
            }
        }
    }, [CardRef.current])

    function handleClick() {
        props.selector(props.cardIndex)
    }

    return (
        <div ref={ CardRef } className={ `${ Styles.Card } ${ props.classAttr }` } >
            <CardBanner Project={ props.data } />
            <CardDetails Project={ props.data } />
        </div>
    )
}

const ProjectCard = () => {
    const [projectIndex, updateProjectIndex] = useState(0)
    const [projectVisibility, updateProjectVisbility] = useState(null)
    const [cardStyleClass, updateCardStyleClass] = useState(Styles.First)

    useEffect(() => {
        setTimeout(() => {
            updateProjectVisbility(Styles.ProjectVisible)
        }, 250)
    }, [projectVisibility])

    useEffect(() => {
        updateCardStyleClass(getCardClass())
    }, [projectIndex])

    function updateCard(cardSelected) {
        updateProjectIndex(cardSelected);
    }

    function currentCard(index) {
        if(index == projectIndex)
            return true
        return false
    }

    function getCardClass() {
        switch(projectIndex) {
            case 0: return Styles.First
            case 1: return Styles.Second;
        }
    }

    const themeStyle = useContext(ThemeContext) == ThemeConstants.Light ? Styles.Light : Styles.Dark;
    return (
        <div className={ `${ Styles.ProjectCard } ${ projectVisibility } ${ themeStyle } ${ cardStyleClass }` }>
            {
                ProjectData.map((data, i) => {
                    return(
                        <Card classAttr={ `${ data['className'] } ${ currentCard(i) ? Styles.ActiveCard : "" }` } selector={ updateCard } cardIndex={ i } data={ data } key={ i } />
                    )
                })
            }
        </div>
    )
}

export default ProjectCard;