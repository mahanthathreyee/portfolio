import React from 'react'
import Banner from './Banner/Banner'
import ThemeContext from './ThemeContext'
import ThemeToggleButton from './ThemeToggleButton'
import { ThemeConstants, InitialTheme } from './Constants'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { theme: InitialTheme }
    }

    ToggleTheme = () => {
        this.setState(
            { theme: this.state.theme == ThemeConstants.Light ? ThemeConstants.Dark : ThemeConstants.Light }
        )
    }

    render () {
        return(
            <ThemeContext.Provider value={ this.state.theme }>
                <Banner />
                <ThemeToggleButton theme={ this.state.theme } toggleTheme={ this.ToggleTheme } />
            </ThemeContext.Provider>
        )
    }
}

export default Home;