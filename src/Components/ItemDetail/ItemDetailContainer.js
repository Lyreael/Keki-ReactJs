import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { getProductById } from '../../products'



// Componente contenedor -> lleva la logica y pedido de datos al componente que se renderiza
const ItemDetailContainer = ({id}) => {

    const [product, setProduct] = useState()

    useEffect  (() => {
        getProductById(id).then(product => {
            console.log(product,id)
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
        return () => {
            setProduct()
        }
    }, [id])



    return (
        <div>
            <h1>Hola</h1>
            { product?
            <ItemDetail product={product} />
            :
            <h1>Cargando...</h1>
            }
        </div>
    )
}

export default ItemDetailContainer
