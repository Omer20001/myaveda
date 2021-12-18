import React from 'react';
import { useCart } from 'react-use-cart';

function CardItem(props) {


    const { addItem } = useCart();
   

    return (


        <div className=" d-inline-flex justify-content-between align-items-center pb-4 col-6 col-md-6 col-lg-3">
            
        <br />
        <div style={{width:"270px"}} className="card" >
        {console.log(props.imgBack)}
                <img 
                onMouseOver={function showw(){
                    setTimeout(function () {document.getElementById(props.id).src=props.imgBack},100);
                }}
                onMouseOut={function close(){
                    setTimeout(function () {document.getElementById(props.id).src=props.img},100);
                }}
                 src={props.img} id={props.id} className=" card-img-top" alt="..." />
                <div  className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title"> $ {props.price}</h5>
                    <p className="card-text">
                        {props.desc}
                    </p>
                    <button  onClick={() => addItem(props.item) } className="add-to-cart">
                        Add to cart
                    </button>
                </div>
            </div>
            <br />
            

        </div>
    )
}

export default CardItem

