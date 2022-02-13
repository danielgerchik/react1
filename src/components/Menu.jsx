import s from './Menu.module.css';
const Menu = () => {
    return(
        <nav className={s.menu}>
            <ul>
                <li className={s.link}><a href="#">Profile</a></li>
                <li className={s.link}><a href="#">News</a></li>
                <li className={s.link}><a href="#">Messages</a></li>
                <li className={s.link}><a href="#">Music</a></li>
                <li className={s.link}><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}
export default Menu