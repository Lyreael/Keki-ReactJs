import React from "react";
import "./style.scss";
//import ItemCount from '../ItemCount';
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = () => {
  // const onAdd = () => {
  //     console.log(`Cantidad de productos seleccionados agregados al carrito: x`);
  // };

  const [items, setItems] = useState([]);


  useEffect(() => {
    setItems([
        { id: 1, name: "Producto 1", price: "$100", img: "https://http2.mlstatic.com/D_NQ_NP_682845-MLA43757528015_102020-O.webp" },
        { id: 2, name: "Producto 2", price: "$200", img: "https://http2.mlstatic.com/D_NQ_NP_964289-MLA48037098186_102021-O.webp" },
        { id: 3, name: "Producto 3", price: "$150", img: "https://http2.mlstatic.com/D_NQ_NP_882044-MLA40965316420_032020-O.webp" },
        { id: 4, name: "Producto 4", price: "$250", img: "https://http2.mlstatic.com/D_NQ_NP_859155-MLA27141170147_042018-O.webp" },
        { id: 5, name: "Producto 5", price: "$200", img: "https://http2.mlstatic.com/D_NQ_NP_986669-MLA40965266044_032020-O.webp" },
    ]);
  }, []);

  return (
    <div className="container">
      <div className="row ">
      <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;