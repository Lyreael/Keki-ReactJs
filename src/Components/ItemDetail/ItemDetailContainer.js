import React, {useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import  Loader  from 'react-loader-spinner'
import {Container} from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import { db } from  '../../services/firebase/firebase'
import { getDoc , doc } from 'firebase/firestore'



// Componente contenedor -> lleva la lógica y pedido de datos al componente que se renderiza
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
    }).finally(() => {
        setLoading(false)
    })
        return () => {
            setProduct()
        }
    }, [paramsId])

    if (loading) {
        return <Container className="loader">
        <Loader class="" type="Oval" color="#6868AC" height={150} width={150}/>
    </Container>
    }

    return (
        <div className='section'>
            <div className='row justify-content-center align-items-center'>
                    <ItemDetail product={product} />
            </div>
        </div>
    )
}

export default ItemDetailContainer
