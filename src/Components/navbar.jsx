import React from 'react';
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css";
import { IoPersonCircle } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            
            <Link to='/'>Shop</Link>
            
            <Link to='/cart'><ShoppingCart size={32}/> </Link>
            <Link to='/login'><IoPersonCircle size={32}/></Link>

        </div>
    </div>
  )
}
