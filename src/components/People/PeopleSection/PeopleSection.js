import PlaceHolder from './../../../assets/images/ph.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const PeopleSection = ({ title, data }) => {

    const logoMap = {
        "linkedin": faLinkedinIn ,
        "github": faGithub ,
        "website": faLink,
        "email": faEnvelope
    }

    return (
        <>
            <div className="title">{title}</div>
            <section className="grid content">
                { data.map((member, idx) => {
                    return (
                        <div key={idx} className="container">
                            <div className="img" style={{backgroundImage:`url(${ member.imgUrl ? (process.env.PUBLIC_URL + member.imgUrl) : PlaceHolder })`}}>
                                { member.links && member.links.length > 0 && <div className="links">
                                    {
                                        member.links ? 
                                            member.links.map((link, idx) => {
                                                return (
                                                    <a key={idx} href={ link.type === "email" ? `mailto:${link.link}` : link.link} target="_black">
                                                        <div className="logo">
                                                            <FontAwesomeIcon icon={logoMap[link.type]}/>
                                                        </div>
                                                    </a>
                                                )
                                            }) :
                                            ""
                                    }
                                </div> }
                            </div>
                            <div className="name text">{member.name}</div>
                            <div className="role text">{member.role ? member.role : member.program}</div>
                            <div className="school text">{member.school ? member.school : member.position}</div>
                        </div>
                    );
                }) }
            </section>
        </>
    )
}

export default PeopleSection;