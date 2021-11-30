import React from 'react'
import './styleCount.scss';

const ItemCount = () => {

// const [stock, setStock] = React.useState(0); //Stock

// const handleChange = (e) => {       
//     setStock(e.target.value);   
// }

// const handleSubmit = (e) => {   
//     e.preventDefault();
//     setStock(0);
// }

const [count, setCount] = React.useState(1);

const handleClick = () => {
   // if(count < stock) { // cuando tenga stock
   //     setCount(count + 1);
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
            <p className="card-text"> <small className="text-muted"> Stock: X </small> </p>
            <button className="btn btn-outline-info" onClick={handleClick2}> - </button>
            <button className="btn btn-outline-info" onClick={handleClick}> + </button>
            <button className="btn btn-outline-danger" onClick={handleClick3}> Reset </button>
            <p> Cantidad: {count} </p>
            {/*<p> Stock: {stock} </p>*/}
            {/*<form onSubmit={handleSubmit}>*/}
            {/*<input type="number" value={stock} onChange={handleChange} />*/}
            {/*<button type="submit">Submit</button>*/}
            {/*</form>*/}
            </div>
        </div>
    )
}

export default ItemCount
