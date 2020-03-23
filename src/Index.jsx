import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Banner from './Banner/Banner'
import ThemeContext from './ThemeContext'
import ThemeToggleButton from './ThemeToggleButton'
import { ThemeConstants, InitialTheme } from './Constants'
import Projects from './Projects/Projects'

const Home = () => {
    const [theme, updateTheme] = useState(InitialTheme)

    const ToggleTheme = () => {
        updateTheme( theme == ThemeConstants.Light ? ThemeConstants.Dark : ThemeConstants.Light )
    }

    return(
        <ThemeContext.Provider value={ theme }>
            <Banner />
            <Projects />
            <ThemeToggleButton theme={ theme } toggleTheme={ ToggleTheme } />
        </ThemeContext.Provider>
    )
}

const Index = () => {
    return(
        <div>
            <Home />
        </div>
    ) 
  };

ReactDOM.render(<Index />, document.getElementById('root'))