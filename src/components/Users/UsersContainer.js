import React, { Component } from "react";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUser,
  setCurrentPage,
  showPreloader,
  toggleFollowingProgress
} from "./../../redux/usersReducer";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.showPreloader(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUser(data.totalCount);
        this.props.showPreloader(false);
      });
  }

  onPageChanged = page => {
    this.props.showPreloader(true);
    this.props.setCurrentPage(page);

    usersAPI.getUsers(page, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.setTotalUser(data.totalCount);
      this.props.showPreloader(false);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUser,
  setCurrentPage,
  showPreloader,
  toggleFollowingProgress
})(UsersContainer);
