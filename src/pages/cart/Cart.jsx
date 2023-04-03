import React, {useContext} from 'react'
import PRODUCTS from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './CartItem'

import { useNavigate } from 'react-router-dom'
import './cart.css'

const Cart = () => {

  const {cartItems,totalCartAmount} = useContext(ShopContext)
  const navigate =useNavigate()

  const totalCartValue = totalCartAmount()

  return (
    <div className = 'cart'>
      <div> 
        <h1> Your Cart Items </h1>
      </div>
      <div className = 'cart'>
      { PRODUCTS.map((product) => {
            if(cartItems[product.id] !== 0 ){
                return <CartItem data = {product} />;
              } else {
                return null;
              }
      })}

      {totalCartValue>0 ? <div className='checkout'>
      <p> Grand Total: € {totalCartValue}</p>
      <button onClick = {()=>navigate('/')}>Continue Shopping</button>
      <button onClick = {() => navigate('/checkout')}>Checkout</button>
      </div> : 

      <div>
      <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0EqBO8XLODha0SfPLYwDGQ_9mF8bKhvN-hqwrFx2gl4txwfDq37M35ex913jere6z24&usqp=CAU' alt = 'emptycart'></img>
      <h2 class='emptyCart'>Your Cart is Empty</h2>
      </div>
       }
      
      </div>
    </div>
  )
}

export default Cart