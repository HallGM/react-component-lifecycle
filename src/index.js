import ReactDOM from "react-dom";
import React from "react";

// Components
import LifecycleMethod from "./LifecycleMethod.js";
import CheckBox from "./CheckBox.js";

// CSS styling
import "./index.css";

import Arrow from "./arrow.js";

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

        <div>
          <label htmlFor="include-deprecated">
            Include Deprecated Methods:
          </label>
          <CheckBox
            checked={this.state.displayDeprecated}
            id="include-deprecated"
            effect={this.handleDeprecated}
          />
        </div>

        <div>
          <label htmlFor="include-uncommon">Include Less Common Methods?</label>
          <CheckBox
            checked={this.state.displayUncommon}
            id="include-uncommon"
            effect={this.handleUncommon}
          />
        </div>

        {/* MOUNTING */}
        <div className="cycle">
          <div className="cycle-box">
            <h2>Mounting</h2>
            <p>
              The mounting lifecycle happens once, when the component mounts for
              the first time.
            </p>

            <LifecycleMethod
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
              title="Property Initializer"
            >
              <code>
                {`state = {
                name: Garry,
                age: 28
              }`}
              </code>
              <p>
                This is not a method, but here you can initialize your state as
                a property without needing to call the constructor
              </p>
            </LifecycleMethod>

            <Arrow />

            <LifecycleMethod
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
              title="constructor"
            >
              <code>constructor(props)</code>
              <p>
                This is the first method to be called when the component is
                created. It is generally used for two purposes, both of which
                are no longer required:
              </p>
              <ul>
                <li>
                  <strong>Initializing state</strong> (You can use property
                  initializer instead)
                </li>
                <li>
                  <strong>Binding event handler methods</strong> (You can use
                  arrow functions instead)
                </li>
              </ul>
              <p>Also:</p>
              <ul>
                <li>
                  If you use the property initializer, state will already by set
                  by the time the constructor executes
                </li>
                <li>
                  Make sure you assign <code>this.state</code> directly, don't
                  call setstate()
                </li>
              </ul>
              <h4>Syntax:</h4>
              <pre>
                <code>
                  {`constructor(props) {\n\tsuper(props);\n\tthis.state = { name: Dave, age: 28 }\n\tthis.handleClick = this.handleClick.bind(this)\n}`}
                </code>
              </pre>
            </LifecycleMethod>

            <Arrow />

            <GetDerivedStateFromProps
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
              alternativeComponent="componentDidMount"
            />

            <Arrow />

            <LifecycleMethod
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
              title="componentWillMount"
              deprecated={true}
            >
              <code>UNSAFE_componentWillMount()</code>
              <p>{unsafePreamble}</p>
              <p>
                If you need to fetch data or do anything 'before' render, you
                can do it in <code>componentDidMount()</code> instead (this will
                cause an extra render, but in these cases you may want to
                display a 'loading' bar initially anyway)
              </p>
            </LifecycleMethod>

            <Arrow />

            <RenderMethod
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
            />

            <Arrow />

            <div className="method centered commit-box">COMMIT</div>

            <Arrow />

            <LifecycleMethod
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
              title="componentDidMount"
            >
              <code>componentDidMount()</code>
              <p>
                This method is called only once, after the first render. It's a
                good place to fetch data, or operate on the DOM.
              </p>
              <ul>
                <li>
                  You can call setState immeditely, if you require a DOM node to
                  exist, otherwise set the state in the constructor (or property
                  initialiser)
                </li>
              </ul>
            </LifecycleMethod>
          </div>
        </div>

        {/* UPDATING */}
        <div className="cycle">
          <div className="cycle-box">
            <h2>Updating</h2>
            <p>
              This lifecycle happens every time an update happens to a
              component. This is usually caused by a change in props, a change
              in state or by a <code>forceUpdate()</code> call.
            </p>
            <LifecycleMethod
              displayUncommon={displayUncommon}
              displayDeprecated={displayDeprecated}
              title="componentWillReceiveProps"
              deprecated={true}
            >
              <code>UNSAFE_ComponentWillReceiveProps(nextProps)</code>
              <p>{unsafePreamble}</p>

              <p>
                This the old version of <code>getDerivedStateFromProps()</code>{" "}
                and does much the same thing.
              </p>
            </LifecycleMethod>

            <Arrow />

            <GetDerivedStateFromProps
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
              alternativeComponent="componentDidUpdate"
            />

            <Arrow />

            <LifecycleMethod
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
              title="shouldComponentUpdate"
              uncommon={true}
            >
              <code>shouldComponentUpdate(nextProps,nextState)</code>
              <p>
                This method is used to prevent rendering - if you know the
                output is not affected by whatever triggered the update
              </p>
              <p>
                <strong>Return:</strong> a boolean - <code>false</code> to stop
                the update from continuing, <code>true</code> to run as normal.
                True is returned by default.
              </p>
              <ul>
                <li>For optimisation only.</li>
                <li>
                  Consider using a Pure Component instead, which will
                  automatically not update if props and state have not changed
                </li>
              </ul>
            </LifecycleMethod>

            <Arrow />

            <LifecycleMethod
              displayUncommon={displayUncommon}
              displayDeprecated={displayDeprecated}
              title="componentWillUpdate"
              deprecated={true}
            >
              <code>UNSAFE_ComponentWilUpdate(nextProps, nextState)</code>
              <p>{unsafePreamble}</p>
              <ul>
                <li>This is the old version of getSnapshotBeforeUpdate</li>
                <li>
                  Any side effects can be moved to{" "}
                  <code>componentDidUpdate()</code> instead
                </li>
              </ul>
            </LifecycleMethod>

            <Arrow />

            <RenderMethod
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
            />

            <Arrow />

            <LifecycleMethod
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
              uncommon={true}
              title="getSnapshotBeforeUpdate"
            >
              <code>getSnapshotBeforeUpdate(prevProps, prevState)</code>
              <p>
                Here you can get information about and do calculations on the
                current DOM right before changes are commited
              </p>
              <p>
                <strong>Return:</strong> whatever you return will get passed as
                an argument to the <code>componentDidUpdate</code> Method
              </p>
            </LifecycleMethod>

            <Arrow />

            <div className="method centered commit-box">COMMIT</div>

            <Arrow />

            <LifecycleMethod
              displayDeprecated={displayDeprecated}
              displayUncommon={displayUncommon}
              title="componentDidUpdate"
            >
              <code>componentDidUpdate(prevProps, prevState, snapshot)</code>
              <p>
                This is the last method to be called on each update, after the
                DOM changes have been commited.
              </p>
              <ul>
                <li>
                  You can use whatever you returned from{" "}
                  <code>getSnapshotBeforeUpdate</code> and operate on the
                  existing DOM.
                </li>
                <li>
                  This is a good place to perform network requests (fetch data)
                  if they depend on a prop having changed.
                </li>
                <li>
                  You can call <code>setState()</code>, but it must be in a
                  conditional statement, otherwise it will make an infinite
                  loop.
                </li>
              </ul>
            </LifecycleMethod>
          </div>
        </div>

        {/* UNMOUNTING */}

        <div className="cycle">
          <div className="cycle-box">
            <h2>Unmounting</h2>
            <p>
              This lifecycle is called when a component is aobut to be removed
              from the DOM.
            </p>
            <LifecycleMethod
              displayUncommon={displayUncommon}
              displayDeprecated={displayDeprecated}
              title="componentWillUnmount"
            >
              <code>componentWillUnmount()</code>
              <p>
                Use this method to invalidate timers, disable event handlers and
                clean up subscriptions before the component is removed.
              </p>
            </LifecycleMethod>
          </div>
        </div>

        {/* ERROR HANDLING */}

        <div className="cycle">
          <div className="cycle-box">
            <h2>Error Handling</h2>
            <div className="non-arrow-spacing">
              <LifecycleMethod
                displayUncommon={displayUncommon}
                displayDeprecated={displayDeprecated}
                uncommon={true}
                title="componentDidCatch"
              >
                <code>componentDidCatch(error, info)</code>
                <p>
                  This method is called when a child throws an error inside a
                  lifecycle method. The <code>error</code> argument is the error
                  itself and the <code>info</code> stores information about the
                  component which threw the error
                </p>
                <ul>
                  <li>
                    It is not called by he component itself, only children of
                    the component
                  </li>
                  <li>
                    side effects are allowed. You can use this to log an error
                    to your own database or error reporting service if you wish
                  </li>
                </ul>
              </LifecycleMethod>
            </div>

            <div className="non-arrow-spacing">
              <LifecycleMethod
                displayUncommon={displayUncommon}
                displayDeprecated={displayDeprecated}
                uncommon={true}
                title="getDerivedStateFromError"
              >
                <code>static getDerivedStateFromError(error)</code>
                <p>
                  This method is called when a child throws an error and is used
                  when you need to change the state because of an error.
                </p>
                <p>
                  <strong>Return:</strong> an object representing the new state
                  - don't use <code>setState()</code>
                </p>
              </LifecycleMethod>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Reused components

function GetDerivedStateFromProps({
  alternativeComponent,
  displayDeprecated,
  displayUncommon,
}) {
  return (
    <LifecycleMethod
      displayDeprecated={displayDeprecated}
      displayUncommon={displayUncommon}
      title="getDerivedStateFromProps"
      uncommon={true}
    >
      <code>static getDerivedStateFromProps(nextProps, prevState)</code>
      <p>
        In this method you can make changes to the state based on props. It
        appears in the initial render as well as on every update.
      </p>
      <p>
        <strong>Return:</strong> an object which represents the new state, or
        null to change nothing.
      </p>
      <ul>
        <li>
          You can't access <code>this</code> (because it's static).
        </li>
        <li>
          In most cases, you won't need to use this method. You can use props
          directly instead.
        </li>
        <li>
          Must not have side effects (you can do this in the{" "}
          {alternativeComponent} method instead).
        </li>
      </ul>
    </LifecycleMethod>
  );
}

const RenderMethod = ({ displayDeprecated, displayUncommon }) => {
  return (
    <LifecycleMethod
      displayDeprecated={displayDeprecated}
      displayUncommon={displayUncommon}
      title="render"
    >
      <code>render()</code>
      <p>
        This is the main method where you basically do whatever you want the
        component to do. You should examine the <code>state</code> and{" "}
        <code>props</code> and return what you want to render.
      </p>
      <p>
        <strong>Return:</strong> a react element (JSX), an array, text node
        (string) or <code>null</code>.
      </p>
      <ul>
        <li>
          Counterintuitively, render does not commit changes to the DOM yet. You
          return what you <em>want</em> to render.
        </li>
        <li>
          This is the only method which <strong>MUST</strong> be called (but you
          can return <code>null</code> if you don't want it to do anything.)
        </li>
      </ul>
    </LifecycleMethod>
  );
};

const unsafePreamble = `This method is now deprecated. You shouldn't use it, but you may
find it in old code - probably without the 'UNSAFE_' prefix.`;

ReactDOM.render(<App />, document.querySelector("#root"));
