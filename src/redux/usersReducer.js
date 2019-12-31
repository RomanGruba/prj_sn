const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_NUMBER = "SET_USERS_NUMBER";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0
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

export default usersReducer;
