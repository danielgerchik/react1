import s from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";
const Menu = () => {
    return(
        <nav className={s.menu}>
            <ul>
                <MenuItem name="Profile"/>
                <MenuItem name="News"/>
                <MenuItem name="Message"/>
                <MenuItem name="Music"/>
                <MenuItem name="Settings"/>
            </ul>
        </nav>
    )
}
export default Menu