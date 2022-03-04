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

class UsersComponentAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage, this.props.usersCount)
    }

    currentPage = (number) => {
        this.props.getUsers(number, this.props.usersCount)

    }

    render() {
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
    return {
        usersArray: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        usersTotalCount: state.usersPage.usersTotalCount,
        usersPage: state.usersPage.usersPage,
        isFetching: state.usersPage.isFetching,
        disabledButtons: state.usersPage.disabledButtons
    }
}


const UsersContainer = connect(mapStateToProps, {
    toggleFollow, setUsers, setTotalCount,
    setCurrentPage, changeFetching, toggleDisabledButtons,
    getUsers, deleteFollow, addFollow
})(UsersComponentAPI)

export default UsersContainer