import React from "react";
import "./style.scss";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts } from "../../products";
//import {categoryId} from "../../products";

export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
//const [categoryId] = useParams

  useEffect(() => {
    const list = getProducts()
    
    list.then(products => {
        setProducts(products)
    }).catch(err  => {
        console.log(err)
    })
    return (() => {
        setProducts([])
    })
}, [])



  return (
    <div className="container">
      <div className="row ">
      <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;