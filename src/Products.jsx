import React from 'react'
//!Array Products
const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
];



function Products() {
    return (
        products.map(el =>
            <div key={el.name} className='flex bg-stone-900 gap-2 text-white pl-2 mt-0.5 rounded-3xl'  >
                <p>{el.name} :</p>
                <p>{el.price} €</p>
            </div>)

    )
}

export default Products
