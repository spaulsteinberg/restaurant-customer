import React from 'react'
import Button from 'react-bootstrap/Button'
import Disclaimer from '../utility/Disclaimer'

type CheckoutModalCompletionFooterProps = {
    handleClick: () => void
}
const CheckoutModalCompletionFooter = ({handleClick}:CheckoutModalCompletionFooterProps) => {

    return (
        <div className="new-order-button-container">
            <Button variant="primary" className="new-order-button" onClick={handleClick}>Start a new order</Button>
            <Disclaimer variant="danger">*Please not that you will not be able to return to this page.</Disclaimer>
        </div>
    )
}

export default CheckoutModalCompletionFooter
