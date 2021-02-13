import ReactDOM from "react-dom";
import React from "react";

// Components
import Cycle from "./Cycle.js";
import CheckBox from "./CheckBox.js";

// data
import data from "./data.js";

// CSS styling
import "./index.css";

class App extends React.Component {
  state = {
    displayDeprecated: false,
    displayUncommon: true,
  };

  componentDidMount() {
    this.handleDeprecated(this.state.displayDeprecated);
    this.handleUncommon(this.state.displayUncommon);
  }

  handleDeprecated = (bool) => {
    this.setState({ displayDeprecated: bool });
  };

  handleUncommon = (bool) => {
    this.setState({ displayUncommon: bool });
  };

  render() {
    let { displayDeprecated, displayUncommon } = this.state;

    return (
      <div>
        <h1>React Lifecycle Methods</h1>

        <div className="centered">
          <label htmlFor="include-uncommon">Include Less Common Methods:</label>
          <CheckBox
            checked={this.state.displayUncommon}
            id="include-uncommon"
            effect={this.handleUncommon}
          />
        </div>

        <div className="centered">
          <label htmlFor="include-deprecated">
            Include Deprecated Methods:
          </label>
          <CheckBox
            checked={this.state.displayDeprecated}
            id="include-deprecated"
            effect={this.handleDeprecated}
          />
        </div>

        <div className="cycle-container">
          {data.map((cycle) => {
            let methods = cycle.methods;
            if (!displayDeprecated) {
              methods = methods.filter((item) => !item.deprecated);
            }
            if (!displayUncommon) {
              methods = methods.filter((item) => !item.uncommon);
            }
            return (
              <Cycle
                title={cycle.title}
                description={cycle.description}
                methods={methods}
                key={cycle.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
