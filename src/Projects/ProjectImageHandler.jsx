import React, { useState, useEffect } from 'react'
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

const ProjectImageHandler = () => {
    const [currentImageIndex, updateCurrentImageIndex] = useState(0)
    
    useEffect(() => {
        setTimeout(() => {
            if(currentImageIndex == (imageAnimationsTime.length - 1))
                updateCurrentImageIndex(0)
            else
                updateCurrentImageIndex(currentImageIndex + 1)
    
        }, imageAnimationsTime[currentImageIndex])
    }, [currentImageIndex])

    return(
        <div className={ Styles.ProjectImageHandler }>
            <ImageSwitcher ImageIndex={ currentImageIndex } />
        </div>
    )
}

export default ProjectImageHandler