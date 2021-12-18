import React, { Component } from 'react'

import Cart from './Cart'
import { CartProvider } from 'react-use-cart'
import '../Style/Home.css'

class Bag extends Component {
    render() {

        return (
        <div className="body">
        <CartProvider >
               

             
               <div style={{display:"flex",justifyContent:"center",alignItems:"center" ,minHeight:"100vh"}}>
               <Cart/>
               </div>
  
  
                      
                  
  
  
              </CartProvider></div>
        )
    }
}

export default Bag