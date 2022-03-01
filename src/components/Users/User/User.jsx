import style from './User.module.css'
import {Link} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../../API/api";



const User = props => {

    return (
        <div className={style.user}>
            <Link to={'/profile/' + props.id}>
                <span>{props.name}</span>
            </Link>
            <Link to={'/profile/' + props.id}><span className={style.img}><img src={props.photo}/></span></Link>

            <div>
                <button onClick={() => {
                    if(props.isfollowing === true) {
                        usersAPI.deleteFollow(props.id)
                            .then(data => {
                            if(data.resultCode === 0) {
                                props.toggleFollow(props.id)
                            }
                        })
                    } else {
                       usersAPI.createFollow(props.id)
                        .then(data => {
                            if(data.resultCode === 0) {
                                props.toggleFollow(props.id)
                            }
                        })
                    }

                }
                }>{props.followStatus}</button>
            </div>
        </div>
    )
    debugger
}

export default User