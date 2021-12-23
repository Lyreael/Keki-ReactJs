import React, { useContext } from 'react'
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import {CartContext} from '../../context/CartContext';
import  {FormatAmount}  from '../../utils'


const CartView = () => {


    const {quantity, products, clear, removeItem, total} = useContext(CartContext)

    
    return (
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
        </Container>
    )
}

export default CartView
