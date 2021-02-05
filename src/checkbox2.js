import React from "react";

class CheckBox extends React.Component {
  handleClick = (event) => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <>
        <input
          id={this.props.id}
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleClick}
        />
      </>
    );
  }
}

export default CheckBox;
