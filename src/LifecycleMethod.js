import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class LifecycleMethod extends React.Component {
  state = {
    displayInfo: false,
    displayDeprecated: true,
    displayUncommon: true,
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
    let { title, deprecated, uncommon, content } = this.props;
    let { displayInfo, displayDeprecated, displayUncommon } = this.state;

    // don't do anything else if displayDeprecated is false
    if (deprecated && !displayDeprecated) {
      return null;
    }

    // don't do anything else if displayUncommon is false
    if (uncommon && !displayUncommon) {
      return null;
    }

    //works out whether or not it should display the component information
    let methodDescription = (display, content) => {
      if (display) {
        return <div className="method-description">{content}</div>;
      }
    };
    return (
      <div className="method">
        <h3
          className={`title-box ${deprecated && "deprecated"} ${
            uncommon && "uncommon"
          } ${!displayInfo && "onclosed"}`}
          onClick={this.clickHandler}
        >
          <div className="icon">
            <FontAwesomeIcon icon={displayInfo ? faCaretDown : faCaretRight} />
          </div>
          {" " + title}
        </h3>
        {methodDescription(displayInfo, content)}
      </div>
    );
  }
}

export default LifecycleMethod;
