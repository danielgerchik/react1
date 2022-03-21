import s from './Header.module.css';
import {Link} from "react-router-dom";
const Header = (props) => {
    return(
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.img}>
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M74.0868 100L93.7228 84.1742L80.9175 68.2833C80.9563 68.2182 80.9994 68.1625 81.0382 68.0985L84.6731 61.5965C95.2782 42.5098 90.6772 6.1837 90.6772 6.1837C90.4377 3.80705 90.1542 2.62555 90.1542 2.62555L67.8559 7.31794C67.8559 7.31794 68.2949 8.5383 69.0615 10.6724C69.0615 10.6724 79.3873 41.8146 76.9077 63.3053L25.9132 0L6.27612 15.8268L19.0815 31.7177C19.0416 31.7829 18.9985 31.8385 18.9596 31.9015L15.3248 38.4045C4.7218 57.4912 9.32177 93.8163 9.32177 93.8163C9.56122 96.1929 9.84373 97.3744 9.84373 97.3744L32.1441 92.6821C32.1441 92.6821 31.7051 91.4617 30.9385 89.3287C30.9385 89.3287 20.6116 58.1854 23.0923 36.6947L74.0868 100Z"
                            fill="#990099"/>
                    </svg>
                </div>
                <div className={s.login}>
                    {!props.isAuth ? <Link to="/login">Авторизоваться</Link> : <Link to="/login" onClick={props.logout}>Выйти</Link>}
                </div>
            </div>
        </header>
    )
}
export default Header