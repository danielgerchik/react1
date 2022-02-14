import s from './Interlocutor.module.css';
import {Link} from "react-router-dom";

const Interlocutor = props => {
    return (
        <div className={s.interlocutor}>
            <Link to={props.path}>{props.name}</Link>
        </div>
    )
}

export default Interlocutor;