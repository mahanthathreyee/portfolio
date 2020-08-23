import React, { useState, useEffect, useRef } from 'react'
import Styles from '../styles/styles.scss'
import { Image1AnimationTime, Image2AnimationTime, Image3AnimationTime } from '../Constants'
import Image1 from './Images/Image_1'
import Image2 from './Images/Image_2'
import Image3 from './Images/Image_3'

const imageAnimationsTime = [Image1AnimationTime, Image2AnimationTime, Image3AnimationTime]

const ImageSwitcher = (props) => {
    switch(props.ImageIndex) {
        case 0: return <Image1 />
        case 1: return <Image2 />
        case 2: return <Image3 />
    }
}

const ProjectImageHandler = (props) => {
    const [currentImageIndex, updateCurrentImageIndex] = useState(0)
    const imageTimer = useRef(null)
    
    useEffect(() => {
        imageTimer.current = setTimeout(() => {
            updateIndex()
        }, imageAnimationsTime[currentImageIndex])

        return () => {
            clearTimeout(imageTimer.current)
        }
    }, [currentImageIndex])

    useEffect(() => {
        if(props.animate) {
            updateIndex()
        } else {
            clearTimeout(imageTimer.current)
        }
    }, [props.animate])

    const updateIndex = () => {
        updateCurrentImageIndex( currentImageIndex => (currentImageIndex + 1) % imageAnimationsTime.length )
    }

    return(
        <div className={ Styles.ProjectImageHandler }>
            {props.animate && 
                <ImageSwitcher ImageIndex={ currentImageIndex } />
            }
        </div>
    )
}

export default ProjectImageHandler