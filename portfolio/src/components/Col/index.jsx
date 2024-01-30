import React from "react";

import PropTypes from "prop-types"; 

function Col(props) {
  const size = props.size
    .split(" ")
    .map((size) => "col-" + size)
    .join(" ");

  return <div className={size}>{props.children}</div>;
}

Col.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}; 

export default Col;
