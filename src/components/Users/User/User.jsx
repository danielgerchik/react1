import style from './User.module.css'
import {Link} from "react-router-dom";


const User = props => {
    return (
        <div className={style.user}>
            <Link to={'/profile/' + props.id}>
                <span>{props.name}</span>
            </Link>
            <Link to={'/profile/' + props.id}><span className={style.img}><img src={props.photo}/></span></Link>
            
            <div> <button onClick={() => {props.toggleFollow(props.id)}}>{props.followStatus}</button></div>
        </div>
    )
}

export default User