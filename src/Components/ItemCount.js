import React from 'react'
import './styleCount.scss';

const ItemCount = ({onAdd, stock}) => {


const [count, setCount] = React.useState(1);

const Increment= () => {
    if(count < stock) {
        setCount(count + 1); // Si hay stock entonces agrego 1 al carrito
    }else{    
    setCount(count); // Si no hay stock entonces no agrego nada al carrito
    }
}

const Decrement = () => {
    if
    (count > 1) { 
        setCount(count - 1); // Si hay productos en el carrito entonces resto 1 al carrito
    }else {
        setCount(1); // Si no hay productos en el carrito entonces no resto nada al carrito
    }
}

const Reset = () => {   
    setCount(1); // Reseteo el carrito a 1 producto
}


    return (
        <div className = "itemCount card" >
            <img className= "card-img-top" src = "" alt = "" />
            <div className = "card-body" >
            <h5 className="card-title"> Producto</h5>
            <p className="card-text"> Detalles del producto  </p>
            <p className="card-text"> Precio: $XXX </p>
            <p className="card-text"> <small className="text-muted"> {stock} </small> </p> 
            <button className="btn btn-outline-info" onClick={Decrement}> - </button>
            <button className="btn btn-outline-info" onClick={Increment}> + </button>
            <button className="btn btn-outline-danger" onClick={Reset}> Reset </button>
            <p> Cantidad: {count} </p>
            <button className="btn btn-danger" onClick={onAdd}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount
