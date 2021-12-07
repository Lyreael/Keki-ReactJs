import React from 'react'



// Componente de presentacion -> recibe datos y los muestra al usuario
const ItemDetail = ({product}) => {



    return (
        <div className="card">
            <small>Product detail</small>
            <h4>{product?.name}</h4>
            <img src={product?.img} className="w-25 rounded d-block mx-auto" alt={product?.name}/>
            <p>{product?.price}</p>
    
        </div>
    )
}

export default ItemDetail

