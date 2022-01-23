import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {CartContext} from '../../context/CartContext';
import { NavLink} from 'react-router-dom'

export const CartWidget = () => {

    const {quantity} = useContext(CartContext)

    return (
    <NavLink to={"/cart"}> <FontAwesomeIcon icon={faCartShopping} /> {quantity} </NavLink>
    )
}

export default CartWidget