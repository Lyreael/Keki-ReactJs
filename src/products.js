const products = [
        { id: 1, name: "Camisa Totoro", categoryId: 'camisas', price: "$4000",stock: 3, description: "Camisa estampada de Totoro.Color único" ,img: "/products/001.jpg" },
        { id: 2, name: "Camisa Gatos", categoryId: 'camisas', price: "$4500",stock: 2, description: "Camisa estampada de gatos. Varios colores" ,img: "/products/002.jpg" },
        { id: 3, name: "Camisa Gold Dragon",categoryId: 'camisas', price: "$5500",stock: 13, description: "Camisa estampada de dragones dorados, modelo único" ,img: "/products/003.jpg" },
        { id: 4, name: "Buzo Gatos", categoryId: 'buzos', price: "$6500",stock: 5, description: "Buzo de gatos, varios colores" ,img: "/products/004.jpg" },
        { id: 5, name: "Buzo Galaxia", categoryId: 'buzos', price: "$5000",stock: 7, description: "Buzo de galaxia, unico" ,img: "/products/005.jpg" },
        { id: 6, name: "Buzo Perro ", categoryId: 'buzos', price: "$4300",stock: 8, description: "Buzo de perro, varios colores" ,img: "/products/006.jpg" },
        { id: 7, name: "Remera Galaxia", categoryId: 'remeras', price: "$400",stock: 2, description: "Remera de galaxia, varios colores" ,img: "/products/007.jpg" },
        { id: 8, name: "Remera Gato", categoryId: 'remeras', price: "$550",stock: 5, description: "Remera de gato, varios colores. Bolsillo sorpresa" ,img: "/products/008.jpg" },
        { id: 9, name: "Remera Perro", categoryId: 'remeras', price: "$650",stock: 10, description: "Remera de pero. varios colores. Bolsillo sorpresa" ,img: "/products/009.jpg" },
        { id: 10, name: "Riñonera Holográfica", categoryId: 'riñoneras', price: "$400",stock: 13, description: " Riñonera con efecto holográfico y doble cierre" ,img: "/products/010.jpeg" },
        { id: 11, name: "Riñonera Reflectiva", categoryId: 'riñoneras', price: "$400",stock: 13, description: "Riñonera reflectiva con soble cierre" ,img: "/products/011.jpeg" },
        { id: 12, name: "Riñonera Peluche", categoryId: 'riñoneras', price: "$400",stock: 13, description: "Riñonera con peluche y doble cierre" ,img: "/products/012.jpeg" },
    ]

const categories = [
    {id:'camisas' , description: 'Camisas'},
    {id:'buzos' , description: 'Buzos'},
    {id:'remeras' , description: 'Remeras'},
    {id:'riñoneras' , description: 'Riñoneras'},
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    }
    )
}

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    }
    )
}

export const getProductsByCategoryId = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productsFiltered = products.filter(product => product.categoryId === categoryId)
        setTimeout(() => {
            resolve(productsFiltered)
        }, 1000)
    }
    )
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find(product => parseInt(product.id) === parseInt(id))
        setTimeout(() => {
            resolve(product)
        }, 1000)
    }
    )
}

export const getItem =() => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 1000)
    })
}
