import React from 'react';
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.usersData,
        pageSize: state.pageSize,
        totalUsersCount: state.totalUsersCount,
        currentPage:  state.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer