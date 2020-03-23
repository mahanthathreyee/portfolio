import React, { useState, useEffect } from 'react'
import Styles from '../../styles/styles.scss'
import { HomeOnLoadAnimationConstants as AnimationConstants } from '../../Constants'

const HeadingHandler = (props) => {
    const [headingState, updateHeadingState] = useState(
        { 
            animationState: AnimationConstants.Done, 
            headingClass: null, 
            contentClass: Styles.Visible,
            pivotFlipState: null,
            pivotIndex: 0,
            contentIndex: 0
        }
    )
    const pivot = ['W', 'M']
    const content = ["elcome", "aganth Seetharaman", "Maganth Seetharaman"]
    
    useEffect(() => {
        if(headingState.animationState == AnimationConstants.Load) {
            setTimeout(() => {
                updateHeadingState({animationState: AnimationConstants.HideWelcome, contentClass: Styles.Invisible, pivotIndex: 0, contentIndex: 0})
            }, 1000)
        }
        else if(headingState.animationState == AnimationConstants.HideWelcome) {
            setTimeout(() => {
                updateHeadingState({animationState: AnimationConstants.FlipPivot, pivotIndex: 0})
            }, 1000)
        }
        else if(headingState.animationState == AnimationConstants.FlipPivot) {
            setTimeout(() => {
                updateHeadingState({animationState: AnimationConstants.RemovePivot, pivotFlipState: Styles.Flip, pivotIndex: 0, headingClass: Styles.Name })
            }, 500)
        }
        else if(headingState.animationState == AnimationConstants.RemovePivot) {
            setTimeout(() => {
                updateHeadingState({animationState: AnimationConstants.Done, pivotIndex: 1, headingClass: Styles.Name, contentClass: Styles.Visible, contentIndex: 1 })
            }, 500)
        }
        else {
            setTimeout(() => {
                updateHeadingState({animationState: AnimationConstants.Done, pivotIndex: -1, headingClass: Styles.Name, contentClass: Styles.Visible, contentIndex: 2})
                props.animationComplete();
            }, 500)
        }
    }, [headingState.animationState])

    return (
        <div className={ `${ Styles.HeadingHandler } ${ headingState.headingClass }` }>
            <h1 className={ `${ Styles.Pivot } ${ headingState.pivotFlipState }` }>{ pivot[headingState.pivotIndex] }</h1>
            <h1 className={ `${ Styles.Content } ${ headingState.contentClass }` }>{ content[headingState.contentIndex] }</h1>
        </div>
    )
}

export default HeadingHandler