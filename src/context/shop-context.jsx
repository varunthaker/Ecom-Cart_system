import React, {createContext, useState} from 'react'
import PRODUCTS from '../products'

export const ShopContext = createContext()

export const ShopContextProvider = (props) => {

    

    const initialCart = ()=> {

        let cart = {}

        PRODUCTS.map((product) => cart[product.id] = 0)

        return cart
    }    

    const [cartItems, setCartItems] = useState(initialCart())

    const addToCart = (itemId) => {

        setCartItems((prevItem) => {

            return (
                {...prevItem,
                [itemId]: prevItem[itemId]+1 } 
            )
        })
    }

    const removeFromCart = (itemId) => {

        setCartItems((prevItem) => {
            return (
                {...prevItem,
                [itemId]: prevItem[itemId]-1 } 
            )
        })

    }

    const updateCartItems = ((newAmount, itemId) => {

        setCartItems((prevItem) => {

            return (
                {
                    ...prevItem,
                    [itemId]: newAmount
                }
            )

        })
    })

    const totalCartAmount = () => {

            let totalCartvalue = 0

            for (const item in cartItems) {

                if(cartItems[item] > 0) {
                    let productInfo = PRODUCTS.find((product)=> product.id === Number(item)) 
                    totalCartvalue += (cartItems[item]*productInfo.price)
                }
            }
            return totalCartvalue
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItems, totalCartAmount}
    

    return (
    <ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>
    ) 

}




