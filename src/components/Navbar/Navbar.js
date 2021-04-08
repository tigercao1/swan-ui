import './Navbar.scss';
import logo from './../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = ["HOME", "PEOPLE", "PUBLICATIONS", "CONTACT US"];

    const checkRoute = (route) => {
        if (route !== "HOME") {
            return `/${route.toLowerCase().split(' ')[0]}`
        }
        return `/`;
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo"/>
                <div className="logo-text"><span>SWAN</span> Research Lab</div>
            </div>
            <div className="nav-links">
                {
                    navLinks.map((text, idx) => {
                        return (
                            <NavLink exact={true} activeClassName="active" key={idx} to={checkRoute(text)}><div className="nav-item">{text}</div></NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar;