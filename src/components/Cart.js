import React from 'react'
import { useCart } from 'react-use-cart';
import '../Style/Home.css'
const Cart = () => {
    const { isEmpty,
        totalUniqueItems,
        items, totalItems,
        cartTotal, updateItemQuantity,
        removeItem,
        emptyCart, } = useCart();
    if (isEmpty) return <div><h1 id='basket' className="empty basket text-center">Cart is empty</h1>  <i style={{fontSize:'40px',color:"red"}} className="fas fa-exclamation-circle"></i></div>
    return (
        <div id="basket" className="basket col-12 col-lg-6 col-md-12 ">
            {isEmpty}
            <selection className="container">

                <div className=" col-12 d-flex align-items-center justify-content-center w-100">
                    <h1>Total Price: ${cartTotal}</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5>Cart({totalUniqueItems}) total Items:({totalItems})</h5>
                        <table className="d-flex align-items-center justify-content-center table table-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr style={{ display: "flex", flexDirection: "column" }} key={index}>
                                            <div>

                                                <td>
                                                    <img src={item.img} alt="err" style={{ height: '7rem' }} />
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>


                                                </td></div>
                                        
                                            <div>
                                                <td  style={{display:"flex","justifyContent":"space-evenly"}}>
                                               <div>
                                               <button className="btn btn-success ms-2 mr-2" onClick={() =>
                                                        updateItemQuantity(item.id, item.quantity - 1)
                                                    }>-</button>

                                                    <button className="btn btn-success ms-2 mr-2" onClick={() =>
                                                        updateItemQuantity(item.id, item.quantity + 1)
                                                    }>+</button>
                                               </div>

                                                    <button className="btn btn-danger ms-2" onClick={() =>
                                                        removeItem(item.id)
                                                    }>Remove Item</button>
                                                </td></div>

                                        </tr>


                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Cart</button>
                        <button className="btn btn-success m-2" >Buy Now</button>
                    </div>
                </div>
            </selection>

        </div>
    )
}

export default Cart
