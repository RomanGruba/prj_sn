import React, { Component } from "react";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  totalUsersCountAC,
  setCurrentPageAC,
  setIsFetchingAC
} from "./../../redux/usersReducer";
import { connect } from "react-redux";
import axios from "axios";
import loader from "../../assets/images/Loader.gif";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.showPreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUser(res.data.totalCount);
        this.props.showPreloader(false);
      });
  }

  onPageChanged = page => {
    this.props.showPreloader(true);
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUser(res.data.totalCount);
        this.props.showPreloader(false);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <img src={loader} /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setTotalUser: totalUsers => dispatch(totalUsersCountAC(totalUsers)),
    setCurrentPage: page => dispatch(setCurrentPageAC(page)),
    showPreloader: status => dispatch(setIsFetchingAC(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
