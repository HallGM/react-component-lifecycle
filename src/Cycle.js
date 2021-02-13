import React from "react";
import LifecycleMethod from "./LifecycleMethod.js";
import Arrow from "./arrow.js";

const Cycle = ({ title, description, methods }) => {
  let methodsList = methods.map((method) => {
    let { title, deprecated, uncommon, content, id } = method;
    if (method.commit) {
      return method.content;
    }
    return (
      <LifecycleMethod
        title={title}
        deprecated={deprecated}
        uncommon={uncommon}
        content={content}
        key={id}
      />
    );
  });

  if (title !== "Error Handling" && title !== "Unmounting") {
    for (let i = methodsList.length - 1; i > 0; i--) {
      methodsList.splice(i, 0, <Arrow key={i + 1000} />);
    }
  }

  return (
    <div className="cycle">
      <div className="cycle-box">
        <h2>{title}</h2>
        <p>{description}</p>
        {methodsList}
      </div>
    </div>
  );
};

export default Cycle;
