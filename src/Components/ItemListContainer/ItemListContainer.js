import ItemList from "../itemList/ItemList";
import { useState, useEffect } from "react";
//import { getProducts, getProductsByCategoryId } from "../../products";
import  {useParams} from "react-router-dom";
import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where} from 'firebase/firestore'
import  Loader  from 'react-loader-spinner'


export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams()


  useEffect(() => {
    if (!categoryId){
      setLoading(true)
      getDocs(collection(db, 'Items')).then(querySnapshot => {
        const products = querySnapshot.docs.map(doc => {
          return { id: doc.id , ...doc.data()}
        })
        setProducts(products)  
      }).catch((error) => {
        console.log('error serching item' , error)
      }).finally(() => {
        setLoading(false)
      })
    } else {
      setLoading(true)
      getDocs(query(collection(db, 'Items'), where('categoryId', '==', categoryId))).then(querySnapshot => {
        const products = querySnapshot.docs.map(doc => {
          return { id: doc.id , ...doc.data()}
        })
        setProducts(products)  
      }).catch((error) => {
        console.log('error serching item' , error)
      }).finally(() => {
        setLoading(false)
      })
    }

    return (() => {
        setProducts([])
    })
}, [categoryId])



if (loading) {
  return <Loader type="Oval" color="#6868AC" height={80} width={80}/>
}

  return (
    <div className="section">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;