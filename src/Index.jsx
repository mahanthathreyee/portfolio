import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Banner from './Banner/Banner'
import ThemeContext from './ThemeContext'
import ThemeToggleButton from './ThemeToggleButton'
import { ThemeConstants, InitialTheme, BannerAnimationStart, BannerAnimationEnd } from './Constants'
import Projects from './Projects/Projects'
import Styles from './styles/styles.scss'

const Home = () => {
    const [theme, updateTheme] = useState(InitialTheme)
    const [bannerAnimationState, updateBannerAnimationState] = useState(BannerAnimationStart)
    const [themeFetchStatus, updateThemeFetchedStatus] = useState(false)
    const projectDivRef = useRef(null)

    useEffect(() => {
        if(! themeFetchStatus) {
            setTimeout(() => {
                fetch('/theme', {method: "GET"})
                .then(res => res.json())
                .then(res => {
                    let currentTheme = res.theme;
                    updateTheme( currentTheme == ThemeConstants.Light ? ThemeConstants.Light : ThemeConstants.Dark )
                    updateThemeFetchedStatus(true)
                })
            }, 1000)
        }
    }, [themeFetchStatus])

    useEffect(() => {
        if(themeFetchStatus) {
            fetch('/theme', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"theme": theme})
            })
        }
    }, [theme])

    const ToggleTheme = () => {
        updateTheme( theme == ThemeConstants.Light ? ThemeConstants.Dark : ThemeConstants.Light )
    }

    return(
        <div className={ Styles.Home }>
            <ThemeContext.Provider value={ theme }>
                <div className={ Styles.SnapPage }>
                    <Banner projectRef={ projectDivRef } animationComplete={  updateBannerAnimationState } themeFetched={ themeFetchStatus }  />
                </div>
                {bannerAnimationState &&
                    <div className={ Styles.SnapPage }>
                        <Projects divRef={ projectDivRef } />
                    </div>
                }
                <ThemeToggleButton theme={ theme } toggleTheme={ ToggleTheme } />
            </ThemeContext.Provider>
        </div>
    )
}

const Index = () => {
    return(
        <Home />
    ) 
  };

ReactDOM.render(<Index />, document.getElementById('root'))