import { useState } from 'react';
import React from 'react'
//!Array Products




function Products() {


    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];
    const [addedProducts, setaddedProducts] = useState([])
    // console.log(addedProducts)
    const addToCart = (p) => {

        // console.log("p : ", p)
        const controllo = addedProducts.some(el => el.name === p.name)
        // console.log("controlo:", controllo)
        // console.log(controllo)
        if (controllo) {
            return

        }

        setaddedProducts(cur => [...cur, { ...p, quantity: 1 }])
        // console.log("dopo i laggiornamento", addedProducts)



    }

    return (
        <>
            <div className='bg-stone-200 my-10 flex flex-col justify-center items-center border border-amber-950'> {products.map((el, index) =>
                <section key={index} className='flex bg-stone-900 gap-2 text-white pl-2 mt-0.5 rounded-3xl items-center w-72 m-2 justify-center'  >
                    <div className='flex gap-1'  >
                        <p>{el.name}:</p>
                        <p>{el.price}€ </p>

                    </div>


                    <div >
                        < button className='text-[8px] border border-amber-800 rounded-2xl p-2 m-2 cursor-pointer hover:bg-stone-200 hover:text-stone-900' onClick={() => addToCart(el)} > Aggiungi al carrello</button >
                    </div>

                </section>
            )}

            </div>
            <div className='bg-stone-200 border w-fit'>
                <h3>Carrello:</h3>
                {console.log(addedProducts)}
                {addedProducts.map((el, index) => {
                    return (
                        <div key={index}>
                            <p>{el.name} : {el.price}€
                                Quantità{el.quantity}</p>

                        </div>

                    )

                })}
            </div>
        </>




    )
}

export default Products
