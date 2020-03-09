import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconData} from '../Constants'
import Styles from '../../styles/styles.scss'

const IconWrapper = (props) => {
    const socialIcon = IconData[props.iconName]
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