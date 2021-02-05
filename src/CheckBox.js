import React from "react";

class CheckBox extends React.Component {
  state = { checked: this.props.initialChecked };

  componentDidMount() {
    this.props.effect();
  }

  handleClick = (event) => {
    this.setState({ checked: event.target.checked }, () => {
      this.props.effect(this.state.checked);
    });
  };

  render() {
    return (
      <>
        <input
          type="checkbox"
          id={this.props.id}
          checked={this.props.checked}
          onChange={this.handleClick}
        />
      </>
    );
  }
}

export default CheckBox;
