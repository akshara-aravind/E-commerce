
import React, { useState } from 'react'
import '../App.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const fetchproductdata = (id) => {
    console.log("usequery is called")
    return axios.get(`http://localhost:4000/products/${id}`)
}
export const Products = () => {
    const { id } = useParams();
    console.log(id)
    const { data, isLoading, isSuccess} = useQuery('productsItems2', () => fetchproductdata(id));
    // useEffect(()=>{
    //     console.log(data)
    // },[data])
    if (isLoading) {
        console.log("Loading")
    }
    if(isSuccess){
        console.log('data is here'+data);
    }
   
    
    return (
        
            
            <div className='ProductPage'>
                <div className='ProductImage'><img src={data && data.data.image} alt='product' />
                </div>
                <div className='ProductDescription'>
                    <h1>{data && data.data.name}</h1>
                    <div >{data && data.data.name} Description</div><br />
                    <div>Price:<b>${data && data.data.price}</b></div><br />
                    <div>quantity:{data && data.data.quantity}</div><br />
                    <div>quantity:{data && data.data.quantity > 10 && <i>Available</i>}
                        {data && data.data.quantity <= 10 && data && data.data.quantity > 0 && <i>selling fast</i>}
                        {data && data.data.quantity === 0 && <i>unavailable</i>}</div><br />
                    <div className='variant'>variants:
                        {data && data.data.variants.map((product) => {
                            return <div key={product.color} ><button >{product.color}</button></div>
                        })}
                    </div><br />
                    <button className='AddToCartBtn'>Add to cart</button>
                </div>
            </div>
       
    );
                    }