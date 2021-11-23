import React from 'react'
import { useSelector } from 'react-redux'
import { ICartState } from '../../redux/cart/cartReducer'
import { RootState } from '../../redux/store'
import ReceiptCardBar from './ReceiptCardBar'
import ReceiptDateBar from './ReceiptDateBar'
import ReceiptInfoBar from './ReceiptInfoBar'
import ReceiptOrder from './ReceiptOrder'
import ReceiptTotalBar from './ReceiptTotalBar'

type CheckoutModalReceiptProps = {}

const CheckoutModalReceipt = (props:CheckoutModalReceiptProps) => {
    const cart = useSelector<RootState, ICartState>(state => state.cart)

    return (
        <div className="receipt-container centered-text">
            <ReceiptInfoBar />
            <ReceiptDateBar />
            <ReceiptOrder cart={cart} />
            <ReceiptTotalBar total={cart.cartValue} />
            <ReceiptCardBar />
        </div>
    )
}

export default CheckoutModalReceipt