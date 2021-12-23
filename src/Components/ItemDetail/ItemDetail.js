//import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount'
import { useContext} from 'react'
//import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import  {FormatAmount}  from '../../utils'



// Componente de presentacion -> recibe datos y los muestra al usuario
const ItemDetail = ({product}) => {

// const [cart , setCart] = useState(true);

const cartContext = useContext(CartContext)

console.log(cartContext)
    const onAdd = (count) => {
        //console.log('Agregado al carrito');
        cartContext.addItem(product, count)
    }
        

    return (
        <div className="card col-4 ">
            <h5 className="card-title">{product?.name}</h5>
            <img className="card-img-top" src={product?.img} alt={product?.name}/>
            <div className="card-body">
            <p className="card-text">{product?.description}</p>
            <p>$ {FormatAmount(product?.price)}</p>
            {/* <Link className="btn btn-primary" to={`/count/${product.id}`}>Comprar</Link> */}
            {/* { cart ? ( <ItemCount onAdd={onAdd} /> ) : ( <Link className="btn btn-primary" to={'/cart'}>Finalizar compra</Link> ) }  */}
            <ItemCount onAdd={onAdd} /> 
            </div>
        </div>
    )
}

export default ItemDetail;

