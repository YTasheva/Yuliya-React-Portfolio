import React from "react";
import PropTypes from "prop-types"; 
import "./style.css";

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
