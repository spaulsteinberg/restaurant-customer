import React from 'react'
import { ICartState } from '../../redux/cart/cartReducer'

type ReceiptOrderProps = {
    cart: ICartState
}
const ReceiptOrder = ({cart}:ReceiptOrderProps) => {
    return (
        <React.Fragment>
            {
                cart.foodIds
                    .map(item =>
                        <React.Fragment key={item}>
                            <div className="receipt-item">{cart.order?.food[item].item}{cart.order?.food[item].quantity > 1 ? ` (${cart.order?.food[item].quantity})` : null}...</div>
                            <div className="receipt-price">{(cart.order?.food[item].price * cart.order?.food[item].quantity).toFixed(2)}</div>
                        </React.Fragment>)
            }
            {
                cart.beverageIds
                    .map(item =>
                        <React.Fragment key={item}>
                            <div className="receipt-item">{cart.order?.drink[item].item}{cart.order?.drink[item].quantity > 1 ? ` (${cart.order?.drink[item].quantity})` : null}...</div>
                            <div className="receipt-price">{(cart.order?.drink[item].price * cart.order?.drink[item].quantity).toFixed(2)}</div>
                        </React.Fragment>)
            }
        </React.Fragment>
    )
}

export default ReceiptOrder
