import React, {useState, useEffect,useContext } from 'react'
import './styleCount.scss';
import { useParams } from 'react-router-dom'
import {CartContext} from '../context/CartContext';
import { db } from  '../services/firebase/firebase'
import { getDoc , doc } from 'firebase/firestore'

const ItemCount = ({initial = 1 }) => {

    const { paramsId } = useParams()
    const [product, setProduct] = useState()
    const [stock, setStock] = useState(0)

    const cartContext = useContext(CartContext)

    useEffect  (() => {
        getDoc(doc(db, 'Items', paramsId)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(product)
            setStock(product.stock)
        }).catch((error) =>{
            console.log('Error serching item', error)
    })
        return () => {
            setProduct()
        }
    }, [paramsId])
    
const [count, setCount] = React.useState(initial);

const Increment= () => {
    if(product?.stock && count < product.stock) {
        setCount(count + 1); // Si hay stock entonces agrego 1 al contador
    }
}

const Decrement = () => {
    if
    (count > 1) { 
        setCount(count - 1); // Si hay productos en el contador entonces resto 1
    }
}

const clear = () => {   
    setCount(1); // Reseteo el contador a 1 producto
    cartContext.clear();  
    setStock(product.stock)    
}

const clickAdd = () => {   
    cartContext.addItem(product, count)    
    setStock(stock - count) 
    stock === 0 ? clear() : setCount(1)
}

    return (
    <div> 
        <p className="card-text"> <small className="text-muted"> Stock {stock} </small> </p> 
        <button className="btn btn__i btn-outline-info" onClick={Decrement}> - </button>
        <button className="btn btn-outline-danger" onClick={clear}> Vaciar carrito</button>
        <button className={'btn btn__i btn-outline-info'} disabled={stock === count} onClick={Increment}> + </button>
        <p className='p__count'> Cantidad: {count} </p>
        <button className="btn btn-primary raise" onClick={clickAdd} disabled={stock === 0}> Agregar al carrito </button>
    </div>
    )
} 

export default ItemCount;
