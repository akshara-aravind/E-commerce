import React from 'react'
import imge from '../images/product1.png'
export const Home=()=>{
    return (
        <div><h1>Products
          <button className='CreateProductBtn'>Create Product</button>
          </h1>
          <div className='Product'>
        <div className='BottlesList'>
        <img src={imge} alt='product'/><br/>
        <div className='BottleText'>shutterstock.com-1914561409</div>
        <h3>Bottle</h3>
        <div >bottle Description</div><br/>
        <div>Price:<b>$310</b></div><br/>
        </div>
        <div className='BottlesList'>
        <img src={imge} alt='product'/><br/>
        <div className='BottleText'>shutterstock.com-1914561409</div>
        <h3>Bottle</h3>
        <div >bottle Description</div><br/>
        <div>Price:<b>$310</b></div><br/>
        </div>
        <div className='BottlesList'>
        <img src={imge} alt='product'/><br/>
        <div className='BottleText'>shutterstock.com-1914561409</div>
        <h3>Bottle</h3>
        <div >bottle Description</div><br/>
        <div>Price:<b>$310</b></div><br/>
        </div>
        <div className='BottlesList'>
        <img src={imge} alt='product'/><br/>
        <div className='BottleText'>shutterstock.com-1914561409</div>
        <h3>Bottle</h3>
        <div >bottle Description</div><br/>
        <div>Price:<b>$310</b></div><br/>
        </div>
        <div className='BottlesList'>
        <img src={imge} alt='product'/><br/>
        <div className='BottleText'>shutterstock.com-1914561409</div>
        <h3>Bottle</h3>
        <div >bottle Description</div><br/>
        <div>Price:<b>$310</b></div><br/>
        </div>
        <div className='BottlesList'>
        <img src={imge} alt='product'/><br/>
        <div className='BottleText'>shutterstock.com-1914561409</div>
        <h3>Bottle</h3>
        <div >bottle Description</div><br/>
        <div>Price:<b>$310</b></div><br/>
        </div>
        </div>
        </div>
        );
}