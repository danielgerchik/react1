import style from './User.module.css'
import {Link} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../../API/api";
import {deleteFollow} from "../../../redux/reducers/usersPage-reducer";



const User = props => {

    return (
        <div className={style.user}>
            <Link to={'/profile/' + props.id}>
                <span>{props.name}</span>
            </Link>
            <Link to={'/profile/' + props.id}><span className={style.img}><img src={props.photo}/></span></Link>

            <div>
                <button disabled={props.disabledButtons.some(el => el === props.id)} onClick={() => {
                    if(props.isfollowing === true) {
                        props.deleteFollow(props.id)
                    } else {
                        props.addFollow(props.id)
                    }

                }
                }>{props.followStatus}</button>
            </div>
        </div>
    )
}

export default User