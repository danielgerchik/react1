import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, toggleFollowAC} from "../../redux/reducers/usersPage-reducer";


const mapStateToProps = state => {
    return {
        usersArray: state.usersPage.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
      toggleFollow: userID => {
          dispatch(toggleFollowAC(userID))
      },
        setUsers: users => {
          dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer