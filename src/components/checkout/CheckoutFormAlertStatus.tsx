import React from 'react'
import { Alert } from 'react-bootstrap'

type CheckoutFormAlertStatusProps = {
    message:string;
    isError:boolean;
}
const CheckoutFormAlertStatus = ({message, isError}:CheckoutFormAlertStatusProps) => {
    return (
        <Alert variant={isError ? "danger" : "primary"} className="status-message">{message}</Alert>
    )
}

export default CheckoutFormAlertStatus
