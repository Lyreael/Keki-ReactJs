import React, { useContext, useState} from 'react'
import { Container, Row, Col, ListGroup, Button, CloseButton } from "react-bootstrap";
import {CartContext} from '../../context/CartContext';
import  {FormatAmount}  from '../../utils'
import {db} from '../../services/firebase/firebase'
import { addDoc, collection } from 'firebase/firestore';
import Loader from 'react-loader-spinner';
import { Link } from "react-router-dom";
import './cartStyle.scss'


const CartView = () => {

    const { quantity, products, clear, removeItem, total} = useContext(CartContext)
    const [isSuccess, setIsSuccess] = useState(false)
    const [loadingOrder, setLoadingOrder] = useState(false)
    
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const confirmOrder = () => {
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
            date: new Date(),
            total: total,
            
        }

        addDoc(collection(db, "orders"), objOrder).then(({ id}) => {
            console.log(id)
            clear()
            setLoadingOrder(false)
            setIsSuccess(true)
        })
} 

    return (
        isSuccess ? (<div className='cart__Success'>
                        <div class="wrapper"> 
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>  
                        </div> 
                        <p> Pedido de compra enviada con éxito </p>
                        <Link className="btn btn-primary btn-detail" to={`/home`}>Volver a la shop</Link>
            </div> ):(
        !loadingOrder ?
    <Container >
        <Row className='cartContainer'>
            <Col>
                <h1 className='title'>Carrito de compra</h1>                
                </Col>  
            </Row>
            <Row>
                <Col className='d-flex text-muted-cart '>
                    <h5 className='title'>Sus elecciones</h5>
                </Col>
            </Row>
            <Row className='cartListSummary'>
        {products.map(product => <div key={product.id}>
                <ListGroup variant="flush">
                    <ListGroup.Item as="li" className='col-12 d-flex row_Prod justify-content-between align-items-center'>
                        <Col className='col-2 d-flex '>
                            <img className='img-cart' src={product?.img} alt={product?.name} />
                        </Col>
                        <Col className='col-7 d-flex infoCart'>
                            <h5 className='title'>{product?.name}</h5>
                            <p className='p__Product'> {product?.description}</p>
                            <p className='p__Quantity'>Cantidad : {product.quantity} </p>
                        </Col>
                        <Col className='col-2 d-flex infoCart p__Price'>
                            <p className='text-muted-price'> Precio por unidad : $ {FormatAmount(product?.price)}</p>
                            <h5 className='title'>Precio total: $ {FormatAmount(product?.total)} </h5>
                        </Col> 
                        <Col>
                            <CloseButton className='col-1 btn-red' onClick={() => removeItem(product) }/>
                        </Col>
                    </ListGroup.Item>
                </ListGroup>
                <hr /></div>    
                    )} 
            </Row>
                <Row className='col-10 total_Cart'>Cantidad total: {quantity} </Row>
                <Row className='col-10 total_Cart'>Precio total : $ { FormatAmount(total)} </Row>
                <Button variant="danger" onClick={clear}>Eliminar compra</Button>
                <form className='form-cart'
                            method="POST"
                            onSubmit={confirmOrder}
                            style={{ margin: '15px 0px' }}
                        >
                            <div className='form__group'>
                            <input className='form__field'
                                onChange={onFormChange}
                                type="text"
                                name="name"
                                placeholder="Nombre"
                            /><label className='form__label' for="name">nombre</label>
                            </div>
                            <div className='form__group'>
                            <input className='form__field'
                                onChange={onFormChange}
                                type="text"
                                name="email"
                                placeholder="email"
                            /><label className='form__label' for="name">email</label>
                            </div>
                            <div className='form__group'>
                            <input className='form__field'
                                onChange={onFormChange}
                                type="phone"
                                name="phone"
                                placeholder="teléfono"
                            /><label className='form__label' for="phone">teléfono</label>
                            </div>
                            <button className='btn__buy'
                                disabled={
                                    products?.length === 0 ||
                                    contact.nombre === '' ||
                                    contact.email === ''
                                }
                            >
                                Finalizar compra
                            </button>
                        </form>
    </Container>: 
    <Container className='loader'>
        <Loader class="" type="Oval" color="#6868AC" height={150} width={150}/>
    </Container>)
    )
}

export default CartView
