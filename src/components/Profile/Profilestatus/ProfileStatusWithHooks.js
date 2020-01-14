import React, { Component } from "react";

const ProfileStatusWithHooks = state => {
  return (
    <>
      {true && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}
      {false && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus
            onBlur={deActivateEditMode}
            value={state.status}
            type="text"
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
