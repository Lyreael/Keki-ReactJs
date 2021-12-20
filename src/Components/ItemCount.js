import React, {useState, useEffect,useContext } from 'react'
import './styleCount.scss';
import { getProductById } from '../products'
import { useParams } from 'react-router-dom'
import {CartContext} from '../context/CartContext';


const ItemCount = ({initial = 1 , onAdd}) => {

    const { paramsId } = useParams()
    const [product, setProduct] = useState()
    const [stock, setStock] = useState(0)


    const cartContext = useContext(CartContext)

    useEffect  (() => {
        getProductById(paramsId).then(product => {
            console.log(product, paramsId)
            setProduct(product)
            setStock(product.stock)
        })
        .catch(error => {
            console.log(error)
        })
        return () => {
            setProduct()
        }
    }, [paramsId])
    
const [count, setCount] = React.useState(initial);


const Increment= () => {
    if(product?.stock && count < product.stock) {
        setCount(count + 1); // Si hay stock entonces agrego 1 al carrito
    }
}

const Decrement = () => {
    if
    (count > 1) { 
        setCount(count - 1); // Si hay productos en el carrito entonces resto 1 al carrito
    }
}


const clear = () => {   
    setCount(1); // Reseteo el carrito a 1 producto
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
        <button className="btn btn-outline-info" onClick={Decrement}> - </button>
        <button className="btn btn-outline-danger" onClick={clear}> Vaciar carrito</button>
        <button className={  'btn btn-outline-info '} disabled={stock === count} onClick={Increment}> + </button>
        <p> Cantidad: {count} </p>
        <button className="btn btn-primary" onClick={clickAdd} disabled={stock === 0}> Agregar al carrito </button>
    </div>
    )
}

export default ItemCount;
