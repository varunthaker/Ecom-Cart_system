import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'


export const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data
    const {cartItems, addToCart, removeFromCart,updateCartItems } = useContext(ShopContext)

  return (
    <div className = 'cartItem'>

    <img src = {productImage} alt = 'product'></img>

    <div className = 'description'>
        <p><b>{productName}</b></p>
        <p>{price} €</p>
        <div className='countHandler'>
        <button onClick = { () => removeFromCart(id)}>−</button>
        <input type="number" value= {cartItems[id]} onChange = {(e) => updateCartItems(Number(e.target.value), id)}/>
        <button onClick = {() => addToCart(id)}>+</button>
        <p>Sub total: {price*cartItems[id]}</p>

        </div>

    </div>
    </div>
    
  )
}
