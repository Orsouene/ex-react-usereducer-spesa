import { useState } from 'react';
import React from 'react'


function Products() {

    //!Array Products
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];
    const [addedProducts, setaddedProducts] = useState([])
    // console.log(addedProducts)
    //*FunzioneupdateProductQuantity
    function updateProductQuantity(p, e) {
        const find = addedProducts.find(el => {
            return el.name === p.name
        })
        console.log("find", find)
        // console.log(find.quantity)

        setaddedProducts(prev =>
            find ?
                prev.map(item => {
                    // console.log("prev", prev)
                    // console.log(addedProducts)
                    // console.log("item", item)
                    if (item.name === find.name) {
                        return {
                            ...item, quantity: e ? parseInt(e.target.value) : item.quantity + 1
                        }
                    }
                    return item

                })
                : addedProducts)

    }
    //*FunzioneAddtoCard
    const addToCart = (p) => {
        // console.log("p : ", p)
        const controllo = addedProducts.some(el => el.name === p.name)
        // console.log("controlo:", controllo)
        // console.log(controllo)
        if (controllo) {
            return updateProductQuantity(p)
        }
        setaddedProducts(cur => [...cur, { ...p, quantity: 1 }])
        // console.log("dopo i laggiornamento", addedProducts)
    }

    //*removeFromCard
    function removeFromCard(p) {

        // console.log(p)
        console.log(addedProducts)
        const find = addedProducts.find((item) => {
            // console.log(item.name);
            return item.name === p.name

        })

        setaddedProducts(curr => {

            if (find) {

                const arrayFiltrato = curr.filter(elemento => elemento.name != find.name)
                return arrayFiltrato
            }

            else {
                return addedProducts
            }
        })

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
                        < button className='text-[8px] border border-amber-800 rounded-2xl p-2 m-2 cursor-pointer hover:bg-green-500 hover:text-stone-900' onClick={() => addToCart(p)} > Aggiungi al carrello</button >

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
                                    <input type="number" className='bg-amber-100 rounded-2xl w-28 pl-4' placeholder='Quantita' min={1} value={p.quantity} onChange={(e) => updateProductQuantity(p, e)} />
                                </span> X </p>
                            < button className='text-[8px] border border-amber-800 rounded-2xl p-1 m-0.5 cursor-pointer hover:bg-red-500 hover:text-stone-900' onClick={() => removeFromCard(p)}  > Remove</button >
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
