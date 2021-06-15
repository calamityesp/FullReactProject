import "./menu-item.styles.scss";
import React from "react";

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={`menu-item ${size}`}
    style={{
      //allows dynamic styling which is awesome
      backgroundImage: `url(${imageUrl})`,
    }}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
