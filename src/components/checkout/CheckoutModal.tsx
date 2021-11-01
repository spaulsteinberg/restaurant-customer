import Modal from "react-bootstrap/Modal"
import {useStripe} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";

type CheckoutModalProps = {
    show:boolean,
    handleCancel: () => void;
}
const CheckoutModal = ({show, handleCancel}:CheckoutModalProps) => {

    const stripe = useStripe();

    return (
        <Modal show={show} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Please enter you payment information:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CheckoutForm stripe={stripe} />
            </Modal.Body>
        </Modal>
    )
}

export default CheckoutModal