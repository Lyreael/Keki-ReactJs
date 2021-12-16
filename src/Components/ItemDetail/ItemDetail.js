//import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount'
import {useState} from 'react'




// Componente de presentacion -> recibe datos y los muestra al usuario
const ItemDetail = ({product}) => {

    const [cart , setCart] = useState(true);

    const onAdd = () => {
        console.log('Agregado al carrito');
        setCart(false);
    }
        

    return (
        <div className="card col-4 ">
            <h5 className="card-title">{product?.name}</h5>
            <img className="card-img-top" src={product?.img} alt={product?.name}/>
            <div className="card-body">
            <p className="card-text">{product?.description}</p>
            <p className="card-text"> Stock {product?.stock}</p>
            <p>{product?.price}</p>
            {/* <Link className="btn btn-primary" to={`/count/${product.id}`}>Comprar</Link> */}
            { cart ? ( <ItemCount onAdd={onAdd} /> ) : ( <button className="btn btn-primary" to={'/cart'}>Finalizar compra</button> ) } 
            </div>
        </div>

    )
}

export default ItemDetail;

