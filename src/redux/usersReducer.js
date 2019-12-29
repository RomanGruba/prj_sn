const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Ivan",
      status: "Cool",
      location: { city: "Kyiv", country: "UA" }
    },
    {
      id: 2,
      followed: true,
      fullName: "Petr",
      status: "New",
      location: { city: "Kyiv", country: "UA" }
    },
    {
      id: 1,
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
      let stateCopy = {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });

export default usersReducer;
