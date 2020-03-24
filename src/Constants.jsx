import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'

export const ThemeConstants = {
    Dark: "dark",
    Light: "light"
}

export const InitialTheme = ThemeConstants.Dark
export const InitalThemeButton = InitialTheme == ThemeConstants.Light ? ThemeConstants.Dark : ThemeConstants.Light


export const HomeOnLoadAnimationConstants = {
    Load: "load",
    HideWelcome: "hideWelcome",
    FlipPivot: "flipPivot",
    RemovePivot: "removePivot",
    Done: "done"
}

export const Github = "Github"
export const Codepen = "Codepen"

export const IconData = {
    [Github]: {
        name: 'Github',
        url: 'https://github.com/mahanthathreyee',
        icon: faGithub
    },
    [Codepen]: {
        name: 'Codepen',
        url: 'https://codepen.io/mahanthathreyee',
        icon: faCodepen
    }
}