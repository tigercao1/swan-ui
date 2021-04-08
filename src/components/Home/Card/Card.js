import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
    return (
        <div className="card">
            <div className="title">{props.title}</div>
            {props.children}
            <Link to={props.route}><div className="link">{props.button}</div></Link>
        </div>
    )
}

export default Card;