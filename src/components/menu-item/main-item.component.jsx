import "./menu-item.styles.scss";
import React from "react";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{
        //allows dynamic styling which is awesome
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
