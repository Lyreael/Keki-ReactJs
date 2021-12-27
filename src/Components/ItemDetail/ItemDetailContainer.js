import React, {useState, useEffect, } from 'react'
import { getProductById } from '../../products'
import { useParams } from 'react-router-dom'
import  Loader  from 'react-loader-spinner'
import ItemDetail from './ItemDetail'
import { db } from  '../../services/firebase/firebase'
import { getDoc , doc } from 'firebase/firestore'



// Componente contenedor -> lleva la logica y pedido de datos al componente que se renderiza
const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const { paramsId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect  (() => {
        setLoading(true)
        getDoc(doc(db, 'Items', paramsId)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(product)
        }).catch((error) =>{
            console.log('Error serching item', error)
    }) .finally(() => {
        setLoading(false)
    }

    )

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
