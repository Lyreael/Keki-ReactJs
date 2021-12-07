import React from "react";

const Item = ({ product }) => {
  console.log(product)
  return (
    <div>
      <div className="card col-3">
        <img className="card-img-top" src={product?.img} alt={product?.name} />
        <div className="card-body">
            <h4 className="card-title">{product?.name}</h4>
            <p className="card-subtitle mb-2 text-muted">{product?.price}</p>
            <span className="card-text">Item {product?.id}</span>
            <button className="btn btn-primary">Ver detalle</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
