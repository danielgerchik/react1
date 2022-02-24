import s from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
    return (
        <nav className={s.menu}>
            <ul>
                <MenuItem path="/profile" name="Profile"/>
                <MenuItem path="/news" name="News"/>
                <MenuItem path="/users" name="Users"/>
                <MenuItem path="/messages" name="Message"/>
                <MenuItem path="/music" name="Music"/>
                <MenuItem path="/settings" name="Settings"/>
            </ul>
        </nav>
    )
}
export default Menu