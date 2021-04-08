import PlaceHolder from './../../../assets/images/ph.jpg';
import './Card.scss';

const Card = (props) => {
    return (
        <div className="publication-card">
            <img alt="project-img" src={ props.imgUrl ? (process.env.PUBLIC_URL + props.imgUrl) : PlaceHolder }></img>
            <div className="publication-content">
                <div className="authors text">{props.authors}</div>
                <div className="title text">{props.title}</div>
                <div className="conference text">{props.conference}</div>
                <div className="summary text">{props.summary}</div>
                <div className="links">
                    {
                        props.links.map((link, idx) => {
                            return (
                                <a key={idx} className="text" target="_black" href={process.env.PUBLIC_URL + link.link}>{link.type}</a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;