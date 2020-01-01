import React, { Component } from "react";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  totalUsersCountAC,
  setCurrentPageAC
} from "./../../redux/usersReducer";
import { connect } from "react-redux";
import axios from "axios";

class UsersContainer extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUser(res.data.totalCount);
      });
    debugger;
  }

  onPageChanged = page => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUser(res.data.totalCount);
      });
  };
  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
