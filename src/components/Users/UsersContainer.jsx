import {connect} from "react-redux";
import {
    changeFetching,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollow
} from "../../redux/reducers/usersPage-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersComponentAPI extends React.Component {

    componentDidMount() {
        this.props.changeFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage}&count=${this.props.usersCount}`, {
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
            this.props.changeFetching(false)
        });
    }
    currentPage = (number)=> {
        this.props.changeFetching(true)
        this.props.setCurrentPage(number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.usersCount}`, {
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.changeFetching(false)
        })

    }
    render(){
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users usersTotalCount={this.props.usersTotalCount} usersCount={this.props.usersCount}
                      currentPage={this.currentPage} usersPage={this.props.usersPage} usersArray={this.props.usersArray}
                      toggleFollow={this.props.toggleFollow}/>
        </>
    }

}

const mapStateToProps = state => {
    return {
        usersArray: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        usersTotalCount: state.usersPage.usersTotalCount,
        usersPage: state.usersPage.usersPage,
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//       toggleFollow: userID => {
//           dispatch(toggleFollow(userID))
//       },
//         setUsers: users => {
//           dispatch(setUsers(users))
//         },
//         setTotalCount: totalCount => {
//             dispatch(setTotalCount(totalCount))
//         },
//         setCurrentPage: number => {
//           dispatch(setCurrentPage(number))
//         },
//         changeFetching: fetchingValue => {
//           dispatch(changeFetching(fetchingValue))
//         }
//     }
// }


const UsersContainer = connect(mapStateToProps,{toggleFollow, setUsers, setTotalCount, setCurrentPage, changeFetching})(UsersComponentAPI)

export default UsersContainer