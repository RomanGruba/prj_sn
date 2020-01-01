const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_NUMBER = "SET_USERS_NUMBER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 2
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
      return { ...state, users: [...state.users, ...action.users] };
    }
    case SET_USERS_NUMBER: {
      return { ...state, totalUsersCount: action.totalUsersNumber };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const totalUsersCountAC = totalUsersNumber => ({
  type: SET_USERS_NUMBER,
  totalUsersNumber
});
export const setCurrentPageAC = page => ({ type: SET_CURRENT_PAGE, page });

export default usersReducer;
