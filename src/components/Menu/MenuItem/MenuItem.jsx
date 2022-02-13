import s from './MenuItem.module.css';

const MenuItem = (props) => {
    return (
        <li className={s.link}><a href="#">{props.name}</a></li>
    )
}
export default MenuItem;