import React from "react";
import PropTypes from "prop-types";

const Alert = (props) => {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in`}
      style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
    >
      {props.children}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Alert;
