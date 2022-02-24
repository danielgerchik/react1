import User from "./User/User";
import userPhoto from '../../img/user.png'
import axios from "axios";
import React from "react";
import style from './Users.module.css'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage}&count=${this.props.usersCount}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        });
    }
    currentPage = (number)=> {
        this.props.setCurrentPage(number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.usersCount}`).then(response => {
            this.props.setUsers(response.data.items)
        })

    }
    render(){
        const usersPagePagination = Math.ceil(this.props.usersTotalCount / this.props.usersCount)

        const usersPagePaginationArray = []

        for (let i = 1; i <= usersPagePagination; i++) {
            if (i <= 20) {
                usersPagePaginationArray.push(i)
            }

        }

       const pagination =  usersPagePaginationArray.map(el => <span onClick={(e)=> this.currentPage(el)} className={`${style.pagination} ${el == this.props.usersPage && style.active}`}>{el}</span>)

        console.log(usersPagePagination)
        console.log(usersPagePaginationArray)
          const users =  this.props.usersArray.map(e => <User name={e.name} age={e.age} citi={e.citi}
                                                              photo={e.photos.small != null ? e.photo.small : userPhoto}
                                                        followStatus={e.followed === true ? 'unfollow' : 'follow'}
                                                              toggleFollow={this.props.toggleFollow} id={e.id}/>)
    return <div>
        {pagination}
        {users}
    </div>
    }

}

export default Users