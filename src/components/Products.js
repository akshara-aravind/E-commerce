
import React, { useState, useEffect } from 'react'
import '../App.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { addToCart } from '../store/cartState'
import { useRecoilState, useRecoilValue } from 'recoil'


const fetchproductdata = (id) => {
    // console.log("usequery is called")
    return axios.get(`http://localhost:4000/products/${id}`)
}
export const Products = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const { data, isLoading, isSuccess, isFetched } = useQuery('productsItems', () => fetchproductdata(id));
    useEffect(() => {
        setShow(data?.data.image)
    }, [data])
    if (isLoading) {
        //  console.log("Loading")
    }
    if (data && isSuccess) {
        // console.log('data is here',data);
    }

    const [Items, setItems] = useRecoilState(addToCart);
    const index = Items.findIndex((Items) => Items.id === data?.data.id)
    const ItemIsPresent = (index >= 0) ? Items[index] : undefined;
    const handleOnClick = () => {
        if (index < 0) {
            setItems((oldItems) => [
                ...oldItems, {
                    id: data?.data.id,
                    description: data?.data.description,
                    name: data?.data.name,
                    price: data?.data.price,
                    image: data?.data.image,
                    cartQuantity: 1,
                },
            ]);
        }

    };
    const increaseQuantity = () => {
        setItems([...Items.slice(0, index), { ...ItemIsPresent, cartQuantity: ItemIsPresent.cartQuantity + 1 }, ...Items.slice(index + 1)])

    }
    const decreaseQuantity = () => {
        if (ItemIsPresent.cartQuantity === 1) {
            setItems([...Items.slice(0, index), ...Items.slice(index + 1)])
        }
        else {
            setItems([...Items.slice(0, index), { ...ItemIsPresent, cartQuantity: ItemIsPresent.cartQuantity - 1 }, ...Items.slice(index + 1)])
        }
    }

    return (
        <div className='ProductPage'>
            <div className='ProductImage'><img src={show} alt='product' />
            </div>
            <div className='ProductDescription'>
                <h1>{data && data.data.name}</h1>
                <div >{data && data.data.description}</div><br />
                <div>Price:<b>${data && data.data.price}</b></div><br />
                <div>quantity:
                    {data && data.data.quantity > 10 && <i>Available</i>}
                    {data && data.data.quantity <= 10 && data && data.data.quantity > 0 && <i>selling fast</i>}
                    {data && data.data.quantity === 0 && <i>unavailable</i>}</div><br />
                <div className='variant'>variants:
                    {data && data.data.variants.map((product) => {
                        return <div className='variantImage' key={product.color} ><button style={{ backgroundColor: product.color }} onClick={() => {
                            setShow(product.image)
                        }} /></div>
                    })}
                </div><br />
                {ItemIsPresent ?
                    <div>
                        <button onClick={decreaseQuantity}>-</button>
                        {Items[index].cartQuantity}
                        {Items[index].cartQuantity < data?.data.quantity && <button onClick={increaseQuantity}>+</button>}
                    </div> :
                    <div>
                        <button className='AddToCartBtn' onClick={handleOnClick}>Add to cart</button>
                    </div>
                }

            </div>

        </div>
    );
}