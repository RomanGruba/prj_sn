import React, { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false
  };

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input value={this.props.status} type="text" />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
