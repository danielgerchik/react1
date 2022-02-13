import s from './Profile.module.css';
import Post from "./Post/Post";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.about}>
                <div className={s.img}>
                    <img src="https://schoolsw3.com/howto/img_avatar.png" alt=""/>
                </div>
                <div className={s.secription}>
                    <div className={s.name}>Иван Иванов</div>
                    <div className={s.aboutMe}>Товарищи! новая модель организационной деятельности в значительной
                        степени обуславливает создание существенных финансовых и административных условий. Товарищи!
                        реализация намеченных плановых заданий требуют от нас анализа новых предложений. Разнообразный и
                        богатый опыт новая модель организационной деятельности требуют определения и уточнения
                        дальнейших направлений развития.
                    </div>
                </div>
            </div>
            <div className={s.makeNewPost}>
                <input placeholder="What's new ?" type="text"/>
                <button>Post</button>
            </div>
            <div className={s.myPosts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
export default Profile