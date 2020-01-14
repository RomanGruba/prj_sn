import React, { useState } from "react";

const ProfileStatusWithHooks = props => {
  let stateWithSetState = useState(false);
  let editMode = stateWithSetState[0];
  let setEditMode = stateWithSetState[1];

  return (
    <>
      {!editMode && (
        <div>
          <span>{props.status || "-------"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus type="text" />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
