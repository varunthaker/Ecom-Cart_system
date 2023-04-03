import React from 'react'
import './shop.css'
import PRODUCTS from '../../products.js'
import Product  from "./Product.jsx";

const Shop = () => {
  return (
    <div className = 'shop'>
    <div>
        <h1 className = 'shopTitle'> VarunTech Shop </h1>
    </div>
    <div className = 'products'> 
        {PRODUCTS.map((product)=> (
            <Product product = {product}
            />
        ))}        
        </div>
    </div>
  )
}

export default Shop

