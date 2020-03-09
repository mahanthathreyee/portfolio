import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import Styles from '../../styles/styles.scss'

const IconData = [
    {
        name: 'Github',
        url: 'https://github.com/mahanthathreyee',
        icon: faGithub
    },
    {
        name: 'Codepen',
        url: 'https://codepen.io/mahanthathreyee',
        icon: faCodepen
    }
]

const IconWrapper = (props) => {
    const socialIcon = IconData.find(icon => { return icon.name == props.iconName })
    return(
        <div>
            <a href={ socialIcon.url } title={ socialIcon.name } className={ Styles.Icons }>
                <FontAwesomeIcon icon={ socialIcon.icon } />
            </a>
        </div>
    )
}

const SocialConnect = (props) => {
    const icons = props.icons
    return(
        <div className={ Styles.SocialConnect }>
            {icons.map(
                (iconName) => {
                    return (
                        <IconWrapper iconName={ iconName } />
                    )
                }
            )}
        </div>
    )
}

export default SocialConnect