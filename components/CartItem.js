import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const CartItem = () => {
    return (
        <div className="cart-item">
                <AiOutlineClose className="close-btn"/>

            <img src="https://cdn.dsmcdn.com/mnresize/415/622/ty26/product/media/images/20201125/9/31982311/19753891/1/1_org_zoom.jpg" className="item-img"/>
            <div className="item-details">
                <div>
                <div className="product-name">Gri Ekose Gömlek</div>
                <div>Renk : <strong>Gri</strong></div>
                <div>Beden : <strong>L</strong></div>
                </div>
                <div>2500 TL</div>
            </div>

            
        </div>
    )
}

export default CartItem
