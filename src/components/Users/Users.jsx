import style from "./Users.module.css";
import User from "./User/User";
import userPhoto from "../../img/user.png";
import React from "react";

const Users = (props)=> {

    const usersPagePagination = Math.ceil(props.usersTotalCount / props.usersCount)

    const usersPagePaginationArray = []

    for (let i = 1; i <= usersPagePagination; i++) {
        if (i <= 20) {
            usersPagePaginationArray.push(i)
        }

    }

    const pagination =  usersPagePaginationArray.map(el => <span onClick={(e)=> props.currentPage(el)} className={`${style.pagination} ${el == props.usersPage && style.active}`}>{el}</span>)

    const users =  props.usersArray.map(e => <User name={e.name} age={e.age} citi={e.citi} isfollowing={e.followed }
                                                        photo={e.photos.small != null ? e.photos.small : userPhoto}
                                                        followStatus={e.followed === true ? 'unfollow' : 'follow'}
                                                        toggleFollow={props.toggleFollow} id={e.id}/>)
    return (
        <div>
            {pagination}
            {users}
        </div>
    )
}

export default Users