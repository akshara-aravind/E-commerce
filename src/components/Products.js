import React from 'react'
import '../App.css'
// import imge from '../images/product1.png'
import {useQuery} from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const fetchproductdata= (id)=>{
        console.log("usequery is called")
        return  axios.get(`http://localhost:4000/products/${id}`)
}
export const Products=()=>{
    const {id}=useParams();
    console.log(id)
    const {data,isLoading,isSuccess}=useQuery('productsItems2',()=>fetchproductdata(id));
    // useEffect(()=>{
    //     console.log(data)
    // },[data])
    if(isLoading)
    {
        console.log("Loading")
    }
    if(data&&isSuccess)
    {
        console.log("Data is here:",data);
    }
    return (
        <div className='ProductPage'>
        <div className='ProductImage'><img src={data?.data.image} alt='product'/>
        </div>
        <div className='ProductDescription'>
        <h1>{data?.data.name}</h1>
        <div >{data?.data.name} Description</div><br/>
        <div>Price:<b>${data?.data.price}</b></div><br/>
        <div>quantity:{data?.data.quantity}</div><br/>
        <button className='AddToCartBtn'>Add to cart</button>
        </div>
        </div>
       );
}

