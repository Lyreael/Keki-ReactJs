import React, { useContext, useRef, useState} from 'react'
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import {CartContext} from '../../context/CartContext';
import  {FormatAmount}  from '../../utils'
import {db} from '../../services/firebase/firebase'
import { addDoc, collection } from 'firebase/firestore';
import Loader from 'react-loader-spinner';


const CartView = () => {

    const {quantity, products, clear, removeItem, total} = useContext(CartContext)

    const [isProccesing, setIsProccesing] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [loadingOrder, setLoadingOrder] = useState(false)
    
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })



    const contactFormRef = useRef()

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const confirmOrder = () => {
        setIsProccesing(true)
        setLoadingOrder(true)

        const buyer = {
            name:contact.name,
            phone: contact.phone,
            address: contact.address,
            comment: contact.comment
        }

        const objOrder = {
            buyer: buyer,
            items: products,
            total: total,
            
        }

        addDoc(collection(db, "orders"), objOrder).then(({ id}) => {
            console.log(id)
            clear()
            setLoadingOrder(false)
            setIsProccesing(false)
            setIsSuccess(true)
        })

        // setTimeout(() => {
        //     clear()
        //     setIsProccesing(false)
        //     setIsSuccess(true)
        // }, 1000)
    } 



    
    return (
        isSuccess ? (<div>Orden de compra enviada con exito</div> ):(
        !loadingOrder ?
    <Container >
        <Row className='cartContainer'>
            <Col>
                <h1 className='text-uppercase'>Carrito de compra</h1>                
                </Col>  
            </Row>
            <Row>
                <Col className='d-flex text-muted-cart '>
                    <h5>Sus elecciones</h5>
                </Col>
            </Row>
            <Row className='cartListSummary'>
        {products.map(product => <div key={product.id}>
                <ListGroup variant="flush">
                    <ListGroup.Item as="li" className='d-flex justify-content-between align-items-center'>
                        <Col className='d-flex '>
                            <img className='img-cart' src={product?.img} alt={product?.name} />
                        </Col>
                        <Col className='d-flex infoCart'>
                            <h5>{product?.name}</h5>
                            <p> {product?.description}</p>
                            <p>Cantidad : {quantity} </p>
                        </Col>
                        <Col className='d-flex infoCart'>
                            <p> Precio por unidad : $ {FormatAmount(product?.price)}</p>
                            <h5>Precio total: $ {FormatAmount(product?.total)} </h5>
                        </Col> 
                        <Col>
                            <Button variant="danger" onClick={() => removeItem(product)}>Eliminar</Button>
                        </Col>
                    </ListGroup.Item>
                </ListGroup></div>                  )} 
            </Row>
                <Row>TOTAL : $ { FormatAmount(total)} </Row>
                <Button variant="danger" onClick={clear}>Eliminar</Button>
                <form
                            method="POST"
                            onSubmit={confirmOrder}
                            style={{ margin: '15px 0px' }}
                        >
                            <input
                                onChange={onFormChange}
                                type="email"
                                name="address"
                                placeholder="email"
                            />
                            <input
                                onChange={onFormChange}
                                type="text"
                                name="name"
                                placeholder="nombre"
                            />
                            <input
                                onChange={onFormChange}
                                type="phone"
                                name="phone"
                                placeholder="telefono"
                            />
                            <button
                                disabled={
                                    products?.length === 0 ||
                                    contact.nombre === '' ||
                                    contact.email === ''
                                }
                            >
                                Finalizar compra 🙌🏼
                            </button>
                        </form>


        </Container>: <Loader type="Oval" color="#6868AC" height={80} width={80}/>)
    )
}

export default CartView
