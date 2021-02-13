import React from "react";

const unsafePreamble = (
  <em>
    This method is now deprecated. You shouldn't use it, but you may find it in
    old code - probably without the 'UNSAFE_' prefix.
  </em>
);

// ALL Lifecycle Methods
const propertyInitializer = {
  id: 1,
  title: "Property Initializer",
  deprecated: false,
  uncommon: false,
  content: (
    <>
      <code>{`state = { name: Garry, age: 28 }`}</code>
      <p>
        This is not a method, but here you can initialize your state as a
        property without needing to call the constructor.
      </p>
      <p>
        Note: This is an experimental javascript feature that comes with Babel
        and create-react-app. It is not officially adopted yet, but pretty safe
        to use.
      </p>
    </>
  ),
};

const constructor = {
  id: 2,
  title: "constructor",
  deprecated: false,
  uncommon: false,
  content: (
    <>
      <code>
        constructor{"("}props{")"}
      </code>
      <p>
        This is the first method to be called when the component is created. It
        is generally used for two purposes:
      </p>
      <ul>
        <li>
          <strong>Initializing state</strong>
        </li>
        <li>
          <strong>Binding event handler methods</strong>
        </li>
      </ul>
      <p>
        Both are quite commonplace but neither is needed for most purposes. You
        can use the property initializer for state and you can use arrow
        functions instead of binding methods.
      </p>
      <p>Also:</p>
      <ul>
        <li>
          If you use the property initializer, state will already by set by the
          time the constructor executes
        </li>
        <li>
          Make sure you assign <code>this.state</code> directly, don't call
          setstate{"()"}
        </li>
      </ul>
      <h4>Syntax:</h4>
      <pre>
        <code>
          {`constructor(props) {\n  super(props);\n  this.state = { name: Dave, age: 28 }\n  this.handleClick = this.handleClick.bind(this)\n}`}
        </code>
      </pre>
    </>
  ),
};

const getDSFP = (alternativeComponent, id) => {
  return {
    id: id,
    title: "getDerivedStateFromProps",
    deprecated: false,
    uncommon: true,
    content: (
      <>
        <code>
          static getDerivedStateFromProps{"("}nextProps, prevState{")"}
        </code>
        <p>
          In this method you can make changes to the state based on props. It
          appears in the initial render as well as on every update.
        </p>
        <p>
          <strong>What to return:</strong> an object which represents the new
          state, or null to change nothing.
        </p>
        <ul>
          <li>
            You can't access <code>this</code> {"("}because it's static{")"}.
          </li>
          <li>
            In most cases, you won't need to use this method. You can use props
            directly instead.
          </li>
          <li>
            Must not have side effects {"("}you can do this in the{" "}
            {alternativeComponent} method instead'{")"}.
          </li>
        </ul>
      </>
    ),
  };
};

const componentWillMount = {
  id: 3,
  title: "componentWillMount",
  deprecated: true,
  uncommon: false,
  content: (
    <>
      <code>UNSAFE_componentWillMount{"()"}</code>
      <p>{unsafePreamble}</p>
      <p>
        If you need to fetch data or do anything 'before' render, you can do it
        in <code>componentDidMount{"()"}</code> instead {"("}this will cause an
        extra render, but in these cases you may want to display a 'loading' bar
        initially anyway{")"}
      </p>
    </>
  ),
};

const render = {
  id: 4,
  title: "render",
  deprecated: false,
  uncommon: false,
  content: (
    <>
      <code>render{"()"}</code>
      <p>
        This is the main method where you basically do whatever you want the
        component to do. You should examine the <code>state</code> and{" "}
        <code>props</code> and return what you want to render.
      </p>
      <p>
        <strong>What to return:</strong> a react element {"(JSX)"}, an array,
        text node
        {"(string)"} or <code>null</code>.
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
    </>
  ),
};

const commit = {
  commit: true,
  content: (
    <div key={5} className="method centered commit-box">
      COMMIT
    </div>
  ),
};

const componentDidMount = {
  id: 6,
  title: "componentDidMount",
  deprecated: false,
  uncommon: false,
  content: (
    <>
      <code>componentDidMount{"()"}</code>
      <p>
        This method is called only once, after the first render. It's a good
        place to fetch data, or operate on the DOM.
      </p>
      <ul>
        <li>
          You can call setState immeditely, if you require a DOM node to exist,
          otherwise set the state in the constructor {"("}or property
          initialiser{")"}
        </li>
      </ul>
    </>
  ),
};

const componentWilllReceiveProps = {
  id: 7,
  title: "componentWillReceiveProps",
  deprecated: true,
  uncommon: false,
  content: (
    <>
      <code>UNSAFE_ComponentWillReceiveProps(nextProps)</code>
      <p>{unsafePreamble}</p>

      <p>
        This the old version of <code>getDerivedStateFromProps()</code> and does
        much the same thing.
      </p>
    </>
  ),
};

const shouldComponentUpdate = {
  id: 8,
  title: "shouldComponentUpdate",
  deprecated: false,
  uncommon: true,
  content: (
    <>
      <code>shouldComponentUpdate(nextProps,nextState)</code>
      <p>
        This method is used to prevent rendering - if you know the output is not
        affected by whatever triggered the update
      </p>
      <p>
        <strong>What to return:</strong> a boolean - <code>false</code> to stop
        the update from continuing, <code>true</code> to run as normal. True is
        returned by default.
      </p>
      <ul>
        <li>For optimisation only.</li>
        <li>
          Consider using a Pure Component instead, which will automatically not
          update if props and state have not changed
        </li>
      </ul>
    </>
  ),
};

const componentWillUpdate = {
  id: 9,
  title: "componentWillUpdate",
  deprecated: true,
  uncommon: false,
  content: (
    <>
      <code>UNSAFE_ComponentWilUpdate(nextProps, nextState)</code>
      <p>{unsafePreamble}</p>
      <ul>
        <li>This is the old version of getSnapshotBeforeUpdate</li>
        <li>
          Any side effects can be moved to <code>componentDidUpdate{"()"}</code>{" "}
          instead
        </li>
      </ul>
    </>
  ),
};

const getSnapshotBeforeUpdate = {
  id: 10,
  title: "getSnapshotBeforeUpdate",
  deprecated: false,
  uncommon: true,
  content: (
    <>
      <code>
        getSnapshotBeforeUpdate{"("}prevProps, prevState{")"}
      </code>
      <p>
        Here you can get information about and do calculations on the current
        DOM right before changes are commited
      </p>
      <p>
        <strong>What to return:</strong> whatever you return will get passed as
        an argument to the <code>componentDidUpdate</code> method
      </p>
    </>
  ),
};

const componentDidUpdate = {
  id: 11,
  title: "componentDidUpdate",
  deprecated: false,
  uncommon: false,
  content: (
    <>
      <code>
        componentDidUpdate{"("}prevProps, prevState, snapshot{")"}
      </code>
      <p>
        This is the last method to be called on each update, after the DOM
        changes have been commited.
      </p>
      <ul>
        <li>
          You can use whatever you returned from{" "}
          <code>getSnapshotBeforeUpdate</code> and operate on the existing DOM.
        </li>
        <li>
          This is a good place to perform network requests (fetch data) if they
          depend on a prop having changed.
        </li>
        <li>
          You can call <code>setState{"()"}</code>, but it must be in a
          conditional statement, otherwise it will make an infinite loop.
        </li>
      </ul>
    </>
  ),
};

const componentWillUnmount = {
  id: 12,
  title: "componentWillUnmount",
  deprecated: false,
  uncommon: false,
  content: (
    <>
      <code>componentWillUnmount{"()"}</code>
      <p>
        Use this method to invalidate timers, disable event handlers and clean
        up subscriptions before the component is removed.
      </p>
    </>
  ),
};

const componentDidCatch = {
  id: 13,
  title: "componentDidCatch",
  deprecated: false,
  uncommon: true,
  content: (
    <>
      <code>
        componentDidCatch{"("}error, info{")"}
      </code>
      <p>
        This method is called when a child throws an error inside a lifecycle
        method. The <code>error</code> argument is the error itself and the{" "}
        <code>info</code> stores information about the component which threw the
        error
      </p>
      <ul>
        <li>
          It is not called by the component itself, only children of the
          component
        </li>
        <li>
          Side effects are allowed. You can use this to log an error to your own
          database or error reporting service if you wish
        </li>
      </ul>
    </>
  ),
};

const getDerivedStateFromError = {
  id: 14,
  title: "getDerivedStateFromError",
  deprecated: false,
  uncommon: true,
  content: (
    <>
      <code>
        static getDerivedStateFromError{"("}error{")"}
      </code>
      <p>
        This method is called when a child throws an error and is used when you
        need to change the state because of an error.
      </p>
      <p>
        <strong>What to return:</strong> an object representing the new state -
        don't use <code>setState{"()"}</code>
      </p>
    </>
  ),
};

// All Life Cycles

const mounting = {
  id: 1,
  title: "Mounting",
  description:
    "The mounting lifecycle happens once, when the component mounts for the first time.",
  methods: [
    propertyInitializer,
    constructor,
    getDSFP("componentDidMount", 15),
    componentWillMount,
    render,
    commit,
    componentDidMount,
  ],
};
const updating = {
  id: 2,
  title: "Updating",
  description:
    "This lifecycle happens every time an update happens to a component. This is usually caused by a change in props, a change in state or by a forceUpdate() call.",
  methods: [
    componentWilllReceiveProps,
    getDSFP("componentDidUpdate", 16),
    shouldComponentUpdate,
    componentWillUpdate,
    render,
    getSnapshotBeforeUpdate,
    commit,
    componentDidUpdate,
  ],
};

const unmounting = {
  id: 3,
  title: "Unmounting",
  description:
    "This lifecycle happens when a component is about to be removed from the DOM.",
  methods: [componentWillUnmount],
};

const errorHandling = {
  id: 4,
  title: "Error Handling",
  description:
    "This lifecycle happens when an error is thrown in a child component.",
  methods: [componentDidCatch, getDerivedStateFromError],
};

const data = [mounting, updating, unmounting, errorHandling];

export default data;
