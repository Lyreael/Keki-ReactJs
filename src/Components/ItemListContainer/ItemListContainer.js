import ItemList from "../itemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategoryId } from "../../products";
import  {useParams} from "react-router-dom";


export const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const list = categoryId ?  getProductsByCategoryId(categoryId) : getProducts();
    
    list.then(products => {
        setProducts(products)
    }).catch(err  => {
        console.log(err)
    })
    return (() => {
        setProducts([])
    })
}, [categoryId])



  return (
    <div className="section">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;