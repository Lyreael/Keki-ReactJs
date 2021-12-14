import {Link} from 'react-router-dom'


// Componente de presentacion -> recibe datos y los muestra al usuario
const ItemDetail = ({product}) => {


    return (
        <div className="card col-4 ">
            <h5 className="card-title">{product?.name}</h5>
            <img className="card-img-top" src={product?.img} alt={product?.name}/>
            <div className="card-body">
            <p className="card-text">{product?.description}</p>
            <p>{product?.price}</p>
            <Link className="btn btn-primary" to={`/count/${product.id}`}>Comprar</Link>
            </div>
        </div>

    )
}

export default ItemDetail;

