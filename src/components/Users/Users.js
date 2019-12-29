import React from "react";

let Users = props => {
  debugger;
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} alt="" />
            </div>
            <div>
              <button>Follow</button>
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
