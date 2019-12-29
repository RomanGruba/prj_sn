const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/42/Sylvester_Stallone.jpg/revision/latest?cb=20160730205426&path-prefix=ru",
      followed: false,
      fullName: "Ivan",
      status: "Cool",
      location: { city: "Kyiv", country: "UA" }
    },
    {
      id: 2,
      photoUrl:
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/42/Sylvester_Stallone.jpg/revision/latest?cb=20160730205426&path-prefix=ru",
      followed: true,
      fullName: "Petr",
      status: "New",
      location: { city: "Kyiv", country: "UA" }
    },
    {
      id: 1,
      photoUrl:
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/42/Sylvester_Stallone.jpg/revision/latest?cb=20160730205426&path-prefix=ru",
      followed: false,
      fullName: "Boris",
      status: "Wow",
      location: { city: "Odessa", country: "UA" }
    }
  ]
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
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
