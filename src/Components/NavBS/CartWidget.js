import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


export const CartWidget = () => {
    return (
        <div>
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="/#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <FontAwesomeIcon icon={faCartShopping} /> Cart
                    </a>
                </li>
            </ul>
        </div>
    )
}
