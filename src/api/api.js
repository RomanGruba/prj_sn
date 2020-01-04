import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "e34c2c28-0715-41fd-ae66-7d008cda5c50" }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },

  followUser(userID) {
    return instance.post("follow/" + userID).then(res => res.data);
  },

  unfollowUser(userID) {
    return instance
      .delete("https://social-network.samuraijs.com/api/1.0/follow/" + userID)
      .then(res => res.data);
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(res => res.data);
  }
};
