//import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount'
import { useContext} from 'react'
//import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import  {FormatAmount}  from '../../utils'
import { Container } from 'react-bootstrap';



// Componente de presentacion -> recibe datos y los muestra al usuario
const ItemDetail = ({product}) => {

const cartContext = useContext(CartContext)

console.log(cartContext)
    const onAdd = (count) => {
        cartContext.addItem(product, count)
    }

    return (
        <Container className='container__detail col-lg-5 col-sm-8'>

            <div className='col-lg-5 col-sm-12'>
                <img className="img__detail" src={product?.img} alt={product?.name}/>
            </div>

            <div className='col-lg-6 col-sm-12 detail__info'>
                <h3 className='detail__title '>{product.name}</h3>
                <p className="detail__description">{product?.description}</p>
                <p className='detail__price'>$ {FormatAmount(product?.price)}</p>
                <div className='detail__count'>
                    <ItemCount onAdd={onAdd} /> 
                </div>
            </div>

        </Container>
    )
}

export default ItemDetail

