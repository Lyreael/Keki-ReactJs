import Item from '../Item/Item'

const ItemList = ({products = []}) => {
    return (
        <div className='row justify-content-center align-items-center'>
            { products.map((product) => <Item key={product.id} product={product} /> ) } 
        </div>
    )
}

export default ItemList;
