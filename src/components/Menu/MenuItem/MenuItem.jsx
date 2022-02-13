import s from './MenuItem.module.css';
import {Link} from "react-router-dom";

const MenuItem = (props) => {
    return (
        <li className={s.link}><Link to={props.path}>{props.name}</Link></li>
    )
}
export default MenuItem;