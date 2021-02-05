import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class LifecycleMethod extends React.Component {
  state = {
    displayInfo: false,
  };

  clickHandler = (e) => {
    this.setState(() => {
      return {
        displayInfo: !this.state.displayInfo,
      };
    });
  };

  render() {
    // props and state we are using
    let {
      title,
      children,
      deprecated = false,
      displayDeprecated,
      uncommon = false,
      displayUncommon,
    } = this.props;
    let { displayInfo } = this.state;

    // don't do anything else if displayDeprecated is false
    if (deprecated && !displayDeprecated) {
      return null;
    }

    // don't do anything else if displayUncommon is false
    if (uncommon && !displayUncommon) {
      return null;
    }

    //works out whether or not it should display the component information
    let childrenDisplay = (display, children) => {
      if (display) {
        return <div className="method-description">{children}</div>;
      }
    };

    return (
      <div className="method">
        <h3
          className={`title-box ${deprecated && "deprecated"}`}
          onClick={this.clickHandler}
        >
          <div className="icon">
            <FontAwesomeIcon icon={displayInfo ? faCaretDown : faCaretRight} />
          </div>
          {" " + title}
        </h3>
        {childrenDisplay(displayInfo, children)}
      </div>
    );
  }
}
export default LifecycleMethod;
