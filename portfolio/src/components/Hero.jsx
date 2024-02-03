import React from "react";

function Hero(props) {
  return (
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    height: '65vh',
    position: 'relative'
   }}
    >
      {props.children}
    </div>
  );
}


export default Hero;
