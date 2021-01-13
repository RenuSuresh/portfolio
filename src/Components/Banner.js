import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: "url(https://wallpaperaccess.com/full/760289.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {/* <img
        src="https://wallpaperaccess.com/full/760289.jpg"
        alt="image"
        className="banner__image"
      /> */}
    </div>
  );
}

export default Banner;
