import s from './Profile.module.css';
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const Profile = props => {
    return (
        <div className={s.profile}>
            <Info/>
            <Posts dataPosts={props.dataPosts.postsArray} addPost={props.addPost}/>
        </div>
    )
}
export default Profile