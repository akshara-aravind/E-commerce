import { NavLink } from "react-router-dom";
import React from 'react'
export const NavBar =()=>{
  return (<div> 
   <NavLink to='/'>Home</NavLink>
    <NavLink to='/products/:id'>Product</NavLink>
    </div>);
}