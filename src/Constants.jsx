import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Styles from './styles/styles.scss'

export const ThemeConstants = {
    Dark: "dark",
    Light: "light"
}

export const InitialTheme = ThemeConstants.Dark
export const InitalThemeButton = InitialTheme == ThemeConstants.Light ? ThemeConstants.Dark : ThemeConstants.Light

export const BannerAnimationStart = false
export const BannerAnimationEnd = true

export const HomeOnLoadAnimationConstants = {
    Load: "load",
    HideWelcome: "hideWelcome",
    FlipPivot: "flipPivot",
    RemovePivot: "removePivot",
    Done: "done"
}

export const Github = "Github"
export const Codepen = "Codepen"
export const LinkedIn = "LinkedIn"

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
    },
    [LinkedIn]: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mahanthathreyee/',
        icon: faLinkedin
    }   
}

export const Image1AnimationTime = 8500
export const Image2AnimationTime = 8500
export const Image3AnimationTime = 8500

export const ProjectData = [
    {
        className: Styles.Project1,
        title: "SASTRA's E-Magazine",
        image: "/images/Illuminati_Logo.png",
        url: "http://sastra.edu/illuminati",
        github: "https://github.com/mahanthathreyee/SASTRA-Illuminati-Website"
    }
]