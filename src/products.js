const products = [
        { id: 1, name: "Producto 1", price: "$100", img: "https://http2.mlstatic.com/D_NQ_NP_682845-MLA43757528015_102020-O.webp" },
        { id: 2, name: "Producto 2", price: "$200", img: "https://http2.mlstatic.com/D_NQ_NP_964289-MLA48037098186_102021-O.webp" },
        { id: 3, name: "Producto 3", price: "$150", img: "https://http2.mlstatic.com/D_NQ_NP_882044-MLA40965316420_032020-O.webp" },
        { id: 4, name: "Producto 4", price: "$250", img: "https://http2.mlstatic.com/D_NQ_NP_859155-MLA27141170147_042018-O.webp" },
        { id: 5, name: "Producto 5", price: "$200", img: "https://http2.mlstatic.com/D_NQ_NP_986669-MLA40965266044_032020-O.webp" },
    ]

const categories = [
    {id:'Tazas' , description: 'Tazas de gato'},
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

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find(product => product.id === id)
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
