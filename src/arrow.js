import React from "react";
import "./index.css";

// Font Awesome Arrows
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Arrow() {
  return (
    <div className="arrow">
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  );
}

export default Arrow;
