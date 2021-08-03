import React from "react";
import "./Collection-item.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
