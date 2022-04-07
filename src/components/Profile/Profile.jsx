import s from './Profile.module.css';
import Info from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";
import InfoWithHooks from "./Info/InfoWithHooks";

const Profile = props => {
    return (
        <div className={s.profile}>
            <InfoWithHooks status={props.status} userProfile={props.userProfile}
                           setStatus={props.setStatus} setPhoto={props.setPhoto}
                           isMyProfile={props.isMyProfile}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile