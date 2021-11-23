import React from 'react'
import Button from 'react-bootstrap/Button'

type CheckoutModalCompletionFooterProps = {
    handleClick: () => void
}
const CheckoutModalCompletionFooter = ({handleClick}:CheckoutModalCompletionFooterProps) => {

    return (
        <div className="new-order-button-container">
            <Button variant="primary" className="new-order-button" onClick={handleClick}>Start a new order</Button>
        </div>
    )
}

export default CheckoutModalCompletionFooter
