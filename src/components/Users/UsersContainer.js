import React from "react";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  totalUsersCountAC,
  setCurrentPageAC
} from "./../../redux/usersReducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setTotalUser: totalUsers => dispatch(totalUsersCountAC(totalUsers)),
    setCurrentPage: page => dispatch(setCurrentPageAC(page))
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
