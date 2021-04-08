import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faSlackHash } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="body">
                <div className="title">Reach Us</div>
                <div className="footer-content">
                    <a href="https://swanresearchlab.slack.com" target="_black"><FontAwesomeIcon icon={faSlackHash}/></a>
                    <a href="https://twitter.com/SWAN_Carleton" target="_black"><FontAwesomeIcon icon={faTwitter}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;