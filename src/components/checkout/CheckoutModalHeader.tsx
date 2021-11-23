import React from 'react'
import Modal from "react-bootstrap/Modal"

type CheckoutModalHeaderProps = {
    title:string;
    orderComplete:boolean;
}
const CheckoutModalHeader = ({title, orderComplete}:CheckoutModalHeaderProps) => {
    return (
       <Modal.Header closeButton={!orderComplete}>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
    )
}

export default CheckoutModalHeader
