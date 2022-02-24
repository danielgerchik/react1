import User from "./User/User";
import userPhoto from '../../img/user.png'
import axios from "axios";
import React from "react";

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render(){
          const users =  this.props.usersArray.map(e => <User name={e.name} age={e.age} citi={e.citi}
                                                              photo={e.photos.small != null ? e.photo.small : userPhoto}
                                                        followStatus={e.followed === true ? 'unfollow' : 'follow'}
                                                              toggleFollow={this.props.toggleFollow} id={e.id}/>)
    return <div>
        {users}
    </div>
    }

}

export default Users