import React from "react";

const Item = ({ item, details }) => {
  return (
    <div>
      <div className="card col-3">
        <img className="card-img-top" src={item.img} alt={item.name} />
        <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-subtitle mb-2 text-muted">{item.price}</p>
            <span className="card-text">Item {item.id}</span>
            <button className="btn btn-primary">Ver detalle</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
