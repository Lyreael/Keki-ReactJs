import React from 'react';
import './style.scss';
import ItemCount from '../ItemCount';

export const ItemListContainer = () => {
    return (
        <div className = "container card-group" >
            <ItemCount />
        </div>
    )
}

export default ItemListContainer