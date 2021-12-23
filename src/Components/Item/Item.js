import { Link } from "react-router-dom";
import  {FormatAmount}  from '../../utils'

const Item = ({ product }) => {
  console.log(product)
  return (

      <div className="card card-block col-3 p-6">
        <img className="card-img-top" src={product?.img} alt={product?.name} />
        <div className="card-body">
            <h4 className="card-title ">{product?.name}</h4>
            <p className="card-text">{product?.category}</p>
            <p className="card-subtitle mb-2 text-muted">$ {FormatAmount(product?.price)}</p>
            <Link className="btn btn-primary" to={`/detail/${product.id}`}>Ver detalles</Link>
        </div>
      </div>

  );
};

export default Item;
