import {connect} from "react-redux";
import {
    addFollow,
    changeFetching, deleteFollow,
    getUsers,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleDisabledButtons,
    toggleFollow,
} from "../../redux/reducers/usersPage-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getDisabledButtons,
    getIsFetching,
    getUserPage,
    getUsersArray,
    getUsersCount,
    getUsersTotalCount
} from "../../redux/selectors/users-selectors";

class UsersComponentAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage, this.props.usersCount)
    }

    currentPage = (number) => {
        this.props.getUsers(number, this.props.usersCount)

    }

    render() {
        // console.log('render users')
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users usersTotalCount={this.props.usersTotalCount} usersCount={this.props.usersCount}
                   currentPage={this.currentPage} usersPage={this.props.usersPage} usersArray={this.props.usersArray}
                   toggleFollow={this.props.toggleFollow} disabledButtons={this.props.disabledButtons}
                   toggleDisabledButtons={this.props.toggleDisabledButtons} deleteFollow={this.props.deleteFollow}
                   addFollow={this.props.addFollow}/>
        </>
    }

}

const mapStateToProps = state => {
    // console.log('mstp')
    return {
        usersArray: getUsersArray(state),
        usersCount: getUsersCount(state),
        usersTotalCount: getUsersTotalCount(state),
        usersPage: getUserPage(state),
        isFetching: getIsFetching(state),
        disabledButtons: getDisabledButtons(state)
    }
}


export default compose(connect(mapStateToProps, {
    toggleFollow, setUsers, setTotalCount,
    setCurrentPage, changeFetching, toggleDisabledButtons,
    getUsers, deleteFollow, addFollow
}))(UsersComponentAPI)


// const UsersContainer = connect(mapStateToProps, {
//     toggleFollow, setUsers, setTotalCount,
//     setCurrentPage, changeFetching, toggleDisabledButtons,
//     getUsers, deleteFollow, addFollow
// })(UsersComponentAPI)

// export default UsersContainer