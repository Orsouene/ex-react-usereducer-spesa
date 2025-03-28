import { useReducer, useState } from 'react';
import React from 'react'


function Products() {
    const [addedProducts, dispatcher] = useReducer(cartReducer, [])
    //!Array Products
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    function cartReducer(addedProducts, action) {

        switch (action.type) {
            case 'ADD_ITEM':


                const addedProduct = addedProducts.find(el => el.name === action.payload.name)

                if (addedProduct) {
                    action.payload.quantity = addedProduct.quantity + 1
                }
                else {
                    return [...addedProducts, {
                        ...action.payload,
                        quantity: 1
                    }]
                }




            case 'UPDATE_QUANTITY':
                if (action.payload.quantity < 1 || isNaN(action.payload.quantity)) {
                    return addedProducts
                }
                return addedProducts.map(p =>
                    p.name === action.payload.name ? { ...p, quantity: action.payload.quantity } : p
                );


            case "REMOVE_ITEM":
                return addedProducts.filter(p => p.name !== action.payload)


            default: return addedProducts;
        }
    }





















    //* TOTALE DA PAGARE 



    let total = addedProducts.reduce((acc, curr) => {
        return acc += curr.price * curr.quantity
    }, 0)
    return (
        <>
            <div className='bg-stone-200 my-10 flex flex-col justify-center items-center border border-amber-950 w-fit m-auto rounded-xl'> {products.map((p, index) =>
                <section key={index} className='flex bg-stone-900 gap-2 text-white pl-2 mt-0.5 rounded-3xl items-center w-72 m-2 justify-center'  >
                    <div className='flex gap-1'  >
                        <p>{p.name}:</p>
                        <p>{p.price}€</p>

                    </div>
                    <div >
                        < button className='text-[8px] border border-amber-800 rounded-2xl p-2 m-2 cursor-pointer hover:bg-green-500 hover:text-stone-900' onClick={() => dispatcher({ type: "ADD_ITEM", payload: p })} > Aggiungi al carrello</button >

                    </div>

                </section>
            )}

            </div>
            <div className='bg-stone-200 border w-fit rounded-2xl p-2 m-auto
            '>
                <h3>Carrello:</h3>
                {/* {console.log(addedProducts)} */}
                {addedProducts.map((p, index) => {
                    return (
                        <div key={index}>
                            <p> <span>
                                {p.name} : {p.price}€
                            </span>
                                <span>
                                    <input type="number" className='bg-amber-100 rounded-2xl w-28 pl-4' placeholder='Quantita' min={1} value={p.quantity} onChange={(e) => dispatcher({ type: "UPDATE_QUANTITY", payload: { name: p.name, quantity: parseInt(e.target.value) } })} />



                                </span> X </p>
                            < button className='text-[8px] border border-amber-800 rounded-2xl p-1 m-0.5 cursor-pointer hover:bg-red-500 hover:text-stone-900' onClick={() => dispatcher({ type: "REMOVE_ITEM", payload: p.name })}  > Remove</button >
                        </div>

                    )

                })}
                <div className='flex border border-amber-900 border-b-0 rounded-lg p-1 w-fit m-auto bg-stone-900 text-white'>
                    <p className='text-sm'>Totale da pagare :
                        {total.toFixed(2)}€</p>
                </div>






            </div>
        </>




    )
}

export default Products
