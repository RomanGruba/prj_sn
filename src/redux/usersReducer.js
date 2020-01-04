import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_NUMBER = "SET_USERS_NUMBER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_USERS_NUMBER: {
      return { ...state, totalUsersCount: action.totalUsersNumber };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetchingStatus };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetchingStatus
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(el => el !== action.userId)]
      };
    }
    default:
      return state;
  }
};

export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setTotalUser = totalUsersNumber => ({
  type: SET_USERS_NUMBER,
  totalUsersNumber
});
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const showPreloader = isFetchingStatus => ({
  type: TOGGLE_IS_FETCHING,
  isFetchingStatus
});
export const toggleFollowingProgress = (isFetchingStatus, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetchingStatus,
  userId
});

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(showPreloader(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUser(data.totalCount));
      dispatch(showPreloader(false));
      dispatch(setCurrentPage(currentPage));
    });
  };
};

export const follow = userID => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.followUser(userID).then(res => {
      if (res.resultCode === 0) {
        dispatch(followSuccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};

export const unfollow = userID => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.unfollowUser(userID).then(res => {
      if (res.resultCode === 0) {
        dispatch(unfollowSuccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};

export default usersReducer;
