import React from "react";

function Hero(props) {
  return (
    <div
      className="hero text-center position-relative img-fluid"
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
