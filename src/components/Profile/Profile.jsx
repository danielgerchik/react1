import s from './Profile.module.css';
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const Profile = props => {
    return (
        <div className={s.profile}>
            <Info/>
            <Posts dataPosts={props.dataPosts.postsArray} newText={props.dataPosts.newText} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile