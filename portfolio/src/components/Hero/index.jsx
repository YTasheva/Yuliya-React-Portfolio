import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function Hero(props) {
  return (
    <div
      className="hero text-right"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      {props.children}
    </div>
  );
}

Hero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Hero;
