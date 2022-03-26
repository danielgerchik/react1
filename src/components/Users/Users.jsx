import User from "./User/User";
import userPhoto from "../../img/user.png";
import React from "react";
import {Pagination} from "./Pagination/Pagination";

const Users = (props) => {

        const users = props.usersArray.map(e => <User name={e.name} age={e.age} citi={e.citi} isfollowing={e.followed}
                                                  photo={e.photos.small != null ? e.photos.small : userPhoto}
                                                  followStatus={e.followed === true ? 'unfollow' : 'follow'}
                                                  toggleFollow={props.toggleFollow} id={e.id}
                                                  disabledButtons={props.disabledButtons}
                                                  toggleDisabledButtons={props.toggleDisabledButtons}
                                                  deleteFollow={props.deleteFollow} addFollow={props.addFollow}/>)
    return (
        <div>
            <Pagination usersTotalCount={props.usersTotalCount} usersCount={props.usersCount} currentPage={props.currentPage} usersPage={props.usersPage}/>
            {users}
        </div>
    )
}

export default Users