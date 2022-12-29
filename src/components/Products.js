import React from 'react'
import '../App.css'
import imge from '../images/product1.png'


export const Products=()=>{
    return (<div>
        <div className='ProductPage'>
        <div className='ProductImage'><img src={imge} alt='product'/><br/>
        <div className='BottleText'>shutterstock.com-1914561409</div>
        </div>
        <div className='ProductDescription'>
        <h3>Bottle</h3>
        <div >bottle Description</div><br/>
        <div>Price:<b>$310</b></div><br/>
        <div>Instock</div>
        <br/>
        <button className='AddToCartBtn'>Add to cart</button>
        </div>
        </div>
        </div>);
}