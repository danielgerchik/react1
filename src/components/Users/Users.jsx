import User from "./User/User";
import userPhoto from '../../img/user.png'
import axios from "axios";

const Users = props => {
    if(props.usersArray == 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)

            })

    }

    const user = props.usersArray.map(e => <User name={e.name} age={e.age} citi={e.citi} photo={e.photos.small != null ? e.photo.small : userPhoto}
                                                 followStatus={e.followed === true ? 'unfollow' : 'follow'} toggleFollow={props.toggleFollow} id={e.id}/>)
    return (
        <div>
            {user}
        </div>
    )
}

export default Users