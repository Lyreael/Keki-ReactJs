import React from 'react'
import './styleCount.scss';

const ItemCount = () => {


const [count, setCount] = React.useState(1);

const handleClick = () => {
   // if(count < stock) { // cuando tenga stock
   //     setCount(count + 1);
   // }else{    
   //     setCount(count);
   // }
    setCount(count + 1);
}

const handleClick2 = () => {
    if
    (count > 1) {
        setCount(count - 1);
    }else {
        setCount(1);
    }
}

const handleClick3 = () => {   
    setCount(1);
    
}



    return (
        <div className = "itemCount card" >
            <img className= "card-img-top" src = "" alt = "" />
            <div className = "card-body" >
            <h5 className="card-title"> Producto</h5>
            <p className="card-text"> Detalles del producto  </p>
            <p className="card-text"> Precio: $XXX </p>
           {/* <p className="card-text"> <small className="text-muted"> {stock} </small> </p> */}
            <button className="btn btn-outline-info" onClick={handleClick2}> - </button>
            <button className="btn btn-outline-info" onClick={handleClick}> + </button>
            <button className="btn btn-outline-danger" onClick={handleClick3}> Reset </button>
            <p> Cantidad: {count} </p>
            <button className="btn btn-danger" >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
