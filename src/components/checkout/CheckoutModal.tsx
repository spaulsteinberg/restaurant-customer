import Modal from "react-bootstrap/Modal"
import {useStripe} from '@stripe/react-stripe-js';
import React, { SyntheticEvent, useState } from "react";
import { ICheckoutForm } from "../../models/ICheckoutForm";
import CheckoutForm from "./CheckoutForm";

type CheckoutModalProps = {
    show:boolean,
    handleCancel: () => void;
}
const CheckoutModal = ({show, handleCancel}:CheckoutModalProps) => {
    const initialFormState:ICheckoutForm = {firstName: "", lastName: "", email: "", credit: ""}
    const [checkoutForm, setCheckoutForm] = useState(initialFormState)

    const stripe = useStripe()

    const handleSubmit = (event:SyntheticEvent) => {
        event.preventDefault();
        console.log("hello")
    }

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setCheckoutForm({...checkoutForm, [event.target.name]: event.target.value})
    }

    return (
        <Modal show={show} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Please enter you payment information:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CheckoutForm submit={handleSubmit} inputChange={handleInputChange} form={checkoutForm} stripe={stripe} />
            </Modal.Body>
        </Modal>
    )
}

export default CheckoutModal