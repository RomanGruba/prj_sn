import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = e => {
    setStatus(e.target.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "-------"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
            autoFocus
            type="text"
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
