import React, {useState, useEffect, } from 'react'
import { getProductById } from '../../products'
import { useParams } from 'react-router-dom'
import  Loader  from 'react-loader-spinner'
import ItemDetail from './ItemDetail'



// Componente contenedor -> lleva la logica y pedido de datos al componente que se renderiza
const ItemDetailContainer = () => {

    const { paramsId } = useParams()
    const [product, setProduct] = useState()

    useEffect  (() => {
        getProductById(paramsId).then(product => {
            console.log(product, paramsId)
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
        return () => {
            setProduct()
        }
    }, [paramsId])

    return (
        <div className='section'>
            <div className='row justify-content-center align-items-center'>
                <h3>Detalles</h3>
                    { product? <ItemDetail product={product} /> : <Loader type="Oval" color="#6868AC" height={80} width={80}/> }
            </div>
        </div>
    )
}

export default ItemDetailContainer
