import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Banner from './Banner/Banner'
import ThemeContext from './ThemeContext'
import ThemeToggleButton from './ThemeToggleButton'
import { ThemeConstants, InitialTheme, BannerAnimationStart, BannerAnimationEnd } from './Constants'
import NavBar from './Navigation/Navigation'
import Projects from './Projects/Projects'
import Styles from './styles/styles.scss'

const Home = () => {
    const [theme, updateTheme] = useState(InitialTheme)
    const [bannerAnimationState, updateBannerAnimationState] = useState(BannerAnimationEnd)
    const projectDivRef = useRef(null)

    useEffect(() => {
        localStorage.setItem('theme', theme)
        updateTheme(theme)
    }, [theme])

    const ToggleTheme = () => {
        updateTheme( theme == ThemeConstants.Light ? ThemeConstants.Dark : ThemeConstants.Light )
    }

    return(
        <div className={ Styles.Home }>
            <ThemeContext.Provider value={ theme }>
                <div className={ Styles.SnapPage }>
                    <Banner projectRef={ projectDivRef } animationComplete={  updateBannerAnimationState } />
                </div>
                {bannerAnimationState &&
                    <div className={ Styles.SnapPage }>
                        <Projects divRef={ projectDivRef } />
                    </div>
                }
                <NavBar />
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