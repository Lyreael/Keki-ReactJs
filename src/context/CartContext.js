import React, { useState, } from "react";

export const CartContext = React.createContext();

export const CartContextProvider =  ({ children }) => {
    
    const [products , setProducts] = useState([]);
    const [quantity , setQuantity] = useState(0);

const addItem=(item, quantity)  => {
    console.log('Agregado al carrito el item ' + item.name + ' cantidad ' +  quantity)

    if(isInCart(item.id)) {
        products.find(product => product.id === item.id).quantity += quantity;
        
    } else { 
        products.push({...item, quantity: quantity})        
    }

    setProducts(products)
    console.log(products)

    let _quant = 0
    products.forEach(product => {   _quant += product.quantity })
    setQuantity(_quant)
}


const clear=()  => {
    console.log('Carrito vacio')
    setProducts([])
    setQuantity(0)
    
}

const getQuantityByProduct= (item) => {
    if(products.find(product => product.id === item.id)) {
        return products.find(product => product.id === item.id).quantity;
    }
}

const isInCart = (id) => {
    return products.find(product => product.id === id)
}



return (
    <CartContext.Provider value={{ 
        products,
        addItem,
        clear, 
        getQuantityByProduct,
        quantity,
        isInCart
    }}>
        {children}
    </CartContext.Provider>
)
}





    