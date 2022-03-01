import {connect} from "react-redux";
import {
    changeFetching,
    setCurrentPage,
    setTotalCount,
    setUsers, toggleDisabledButtons,
    toggleFollow
} from "../../redux/reducers/usersPage-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/api";

class UsersComponentAPI extends React.Component {

    componentDidMount() {
        this.props.changeFetching(true)
        usersAPI.getUsers(this.props.usersPage, this.props.usersCount)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.changeFetching(false)
            });
    }

    currentPage = (number) => {
        this.props.changeFetching(true)
        this.props.setCurrentPage(number)
        usersAPI.getUsers(number, this.props.usersCount)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.changeFetching(false)
            })

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users usersTotalCount={this.props.usersTotalCount} usersCount={this.props.usersCount}
                   currentPage={this.currentPage} usersPage={this.props.usersPage} usersArray={this.props.usersArray}
                   toggleFollow={this.props.toggleFollow} disabledButtons={this.props.disabledButtons}
                   toggleDisabledButtons={this.props.toggleDisabledButtons}/>
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
    setCurrentPage, changeFetching, toggleDisabledButtons})(UsersComponentAPI)

export default UsersContainer