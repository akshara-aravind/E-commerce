import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
import {Link} from 'react-router-dom'
export const Home=()=>{
    const {data}=useQuery(['products'],()=>{
        return axios.get('http://localhost:4000/products')
      })
      if(data)
      {
          console.log("Data is here:",data);
      }
    return (
        <div><h1>Products
          <button className='CreateProductBtn'>Create Product</button>
          </h1>
          <div className='Product'>
          {data && data.data.map((product)=>{
            return <div className='ProductList' key={product.id} ><Link to={`/products/${product.id}`}><img src={product.image} alt='product'/></Link></div>
         })}
        </div>
        </div>
        );
}