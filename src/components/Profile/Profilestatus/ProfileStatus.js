import React, { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };

  deActivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = e => {
    this.setState({
      status: e.currentTarget.value
    });
  };

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus
              onBlur={this.deActivateEditMode}
              value={this.state.status}
              type="text"
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
