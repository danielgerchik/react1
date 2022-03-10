import s from './Profile.module.css';
import Info from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";

const Profile = props => {
    return (
        <div className={s.profile}>
            <Info status= 'this is status... blabla' userProfile={props.userProfile}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile