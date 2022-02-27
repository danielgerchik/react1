import {connect} from "react-redux";
import {
    changeFetchingAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleFollowAC
} from "../../redux/reducers/usersPage-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersComponentAPI extends React.Component {

    componentDidMount() {
        this.props.changeFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage}&count=${this.props.usersCount}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
            this.props.changeFetching(false)
        });
    }
    currentPage = (number)=> {
        this.props.changeFetching(true)
        this.props.setCurrentPage(number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.usersCount}`).then(response => {
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
const mapDispatchToProps = dispatch => {
    return {
      toggleFollow: userID => {
          dispatch(toggleFollowAC(userID))
      },
        setUsers: users => {
          dispatch(setUsersAC(users))
        },
        setTotalCount: totalCount => {
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage: number => {
          dispatch(setCurrentPageAC(number))
        },
        changeFetching: fetchingValue => {
          dispatch(changeFetchingAC(fetchingValue))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponentAPI)

export default UsersContainer