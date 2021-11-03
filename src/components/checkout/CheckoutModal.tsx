import Modal from "react-bootstrap/Modal"
import {useElements, useStripe} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";
import './checkout-styles.scss'

type CheckoutModalProps = {
    show:boolean,
    amount:string,
    handleCancel: () => void;
}
const CheckoutModal = ({show, amount, handleCancel}:CheckoutModalProps) => {

    const stripe = useStripe();
    const elements = useElements();

    return (
        <Modal show={show} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Please enter you payment information:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CheckoutForm stripe={stripe} elements={elements} amount={amount}/>
            </Modal.Body>
        </Modal>
    )
}

export default CheckoutModal