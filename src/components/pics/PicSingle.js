import React from "react";

const PicSingle = ({ item }) => (
  <div className="card">
    <img
      src={item.urls.small}
      className="card-img-top"
      alt={item.alt_description}
    />
    <div className="card-body">
      <p className="card-text">
        <strong> Photo Grapher:</strong> {item.user.first_name}{" "}
        {item.user.last_name}
      </p>
      <p className="card-text">{item.description}</p>
    </div>
  </div>
);

export default PicSingle;
