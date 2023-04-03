import React, {useContext} from 'react'
import {ShopContext} from '../../context/shop-context'



const Product = (props) => {
  
  const {id,  productName, price, productImage} =props.product
  const {addToCart, cartItems} = useContext(ShopContext)

  const numberOfProducts = cartItems[id]


  return (
    <div className = 'product'>
        <img src = {productImage} alt = 'product'></img>
        <div className = 'description'>

        <p><b>{productName}</b> </p>
        <p>{price} €</p>
        </div>
        
        <button className = 'addToCartBttn' onClick = { () => addToCart(id)}> Add to Cart {numberOfProducts>0 && <> ({numberOfProducts}) </>} </button>

    </div>
  )
}

export default Product