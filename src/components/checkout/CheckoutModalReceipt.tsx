import React from 'react'
import { useSelector } from 'react-redux'
import { ICartState } from '../../redux/cart/cartReducer'
import { ICheckoutState } from '../../redux/checkout/checkoutReducer'
import { RootState } from '../../redux/store'
import ReceiptCardBar from './ReceiptCardBar'
import ReceiptDateBar from './ReceiptDateBar'
import ReceiptInfoBar from './ReceiptInfoBar'
import ReceiptNumber from './ReceiptNumber'
import ReceiptOrder from './ReceiptOrder'
import ReceiptTotalBar from './ReceiptTotalBar'

type CheckoutModalReceiptProps = {}

const CheckoutModalReceipt = (props:CheckoutModalReceiptProps) => {
    const cart = useSelector<RootState, ICartState>(state => state.cart)
    const checkout = useSelector<RootState, ICheckoutState>(state => state.checkout);

    return (
        <div className="receipt-container centered-text">
            <ReceiptInfoBar />
            <ReceiptDateBar date={checkout.createdAt}/>
            <ReceiptOrder cart={cart} />
            <ReceiptTotalBar total={cart.cartValue} />
            <ReceiptCardBar card={checkout.last4} />
            <ReceiptNumber receipt={checkout.receipt} />
        </div>
    )
}

export default CheckoutModalReceipt
