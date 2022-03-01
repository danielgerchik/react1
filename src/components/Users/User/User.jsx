import style from './User.module.css'
import {Link} from "react-router-dom";
import axios from "axios";



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
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '258464ba-87e1-40fc-aa23-32d1f0b13fe8'
                            }
                        }).then(response => {
                            if(response.data.resultCode === 0) {
                                props.toggleFollow(props.id)
                            }
                        })
                    } else {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '258464ba-87e1-40fc-aa23-32d1f0b13fe8'
                            }
                        }).then(response => {
                            if(response.data.resultCode === 0) {
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