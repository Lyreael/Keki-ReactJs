import React, { useState, } from "react";



export const CartContext = React.createContext();

export const CartContextProvider =  ({ children }) => {
    
    const [products , setProducts] = useState([]);
    const [quantity , setQuantity] = useState(0);
    const [total , setTotal] = useState(0);

const addItem = (item, itemQuantity)  => {
    console.log('Agregado al carrito el item ' + item.name + ' cantidad ' +  itemQuantity)

    if(isInCart(item.id)) {
        let product = products.find(product => product.id === item.id);
        product.quantity += itemQuantity;    
        product.total += itemQuantity * item.price;;     
    } else { 
        item.total = item.price * itemQuantity;
        products.push({...item, quantity: itemQuantity})        
    }

    setProducts(products)
    console.log(products)

// recalculate products quantity
    let _quant = 0
    products.forEach(product => {   _quant += product.quantity })
    setQuantity(_quant)
    setTotal(products.reduce((total, product) => total + product.total, 0))
}

const removeItem=(item)  => {

    if(isInCart(item.id)) {
        let idx = products.findIndex(product => product.id === item.id);
        products.splice(idx, 1);
    } else { 
        products.push({...item, quantity: quantity})        
    }

    setProducts(products)
    console.log(products)

// recalculate products quantity
    let quantCounter = 0
    products.forEach(product => {   quantCounter += product.quantity })
    setQuantity(quantCounter)
    setTotal(products.reduce((total, product) => total + product.total, 0))
}

const clear=()  => {
    console.log('Carrito vacio')
    setProducts([])
    setQuantity(0)
    setTotal(0)
    
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
        isInCart,
        removeItem,
        total
    }}>
        {children}
    </CartContext.Provider>
)
}