import s from './Profile.module.css';
import Info from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";

const Profile = props => {
    return (
        <div className={s.profile}>
            <Info/>
            <PostsContainer store={props.store} />
        </div>
    )
}

export default Profile