import React from 'react';
import './style.scss';
import ItemCount from '../ItemCount';

export const ItemListContainer = () => {

    const onAddItem = () => {
        console.log('add item');
    };


    return (
        <div className = "container card-group" >
            <ItemCount onAdd={onAddItem} stock="7" />
        </div>
    )
}

export default ItemListContainer