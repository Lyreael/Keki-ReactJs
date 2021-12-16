import React, {useState, useEffect, } from 'react'
import './styleCount.scss';
import { getProductById } from '../products'
import { useParams } from 'react-router-dom'



const ItemCount = ({initial = 0 , onAdd}) => {

    const { paramsId } = useParams()
    const [product, setProduct] = useState()

    useEffect  (() => {
        getProductById(paramsId).then(product => {
            console.log(product, paramsId)
            setProduct(product)
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
    (count > 0) { 
        setCount(count - 1); // Si hay productos en el carrito entonces resto 1 al carrito
    }
}

const Reset = () => {   
    setCount(0); // Reseteo el carrito a 1 producto
}




    return (
    <div> 
        <p className="card-text"> <small className="text-muted"> Stock {product?.stock} </small> </p> 
        <button className="btn btn-outline-info" onClick={Decrement}> - </button>
        <button className="btn btn-outline-danger" onClick={Reset}> Vaciar </button>
        <button className={  'btn btn-outline-info '} disabled={product?.stock ===  count} onClick={Increment}> + </button>
        <p> Cantidad: {count} </p>
        <button className="btn btn-primary" onClick={onAdd} > Agregar al carrito </button>
    </div>
    )
}

export default ItemCount
