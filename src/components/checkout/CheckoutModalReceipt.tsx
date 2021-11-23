import React from 'react'
import { useSelector } from 'react-redux'
import { ICartState } from '../../redux/cart/cartReducer'
import { RootState } from '../../redux/store'
import ReceiptCardBar from './ReceiptCardBar'
import ReceiptDateBar from './ReceiptDateBar'
import ReceiptOrder from './ReceiptOrder'
import ReceiptTotalBar from './ReceiptTotalBar'

type CheckoutModalReceiptProps = {}

const CheckoutModalReceipt = (props:CheckoutModalReceiptProps) => {
    const cart = useSelector<RootState, ICartState>(state => state.cart)

    return (
        <div className="receipt-container centered-text">
            <ReceiptDateBar />
            <ReceiptOrder cart={cart} />
            <ReceiptTotalBar total={cart.cartValue} />
            <ReceiptCardBar />
        </div>
    )
}

export default CheckoutModalReceipt
