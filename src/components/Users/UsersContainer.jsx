import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentPageAC, setTotalCountAC, setUsersAC, toggleFollowAC} from "../../redux/reducers/usersPage-reducer";


const mapStateToProps = state => {
    return {
        usersArray: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        usersTotalCount: state.usersPage.usersTotalCount,
        usersPage: state.usersPage.usersPage
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
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer