import Modal from "react-bootstrap/Modal"
import CheckoutForm from "./CheckoutForm";
import { Stripe, StripeElements } from '@stripe/stripe-js';

type CheckoutModalInProgressProps = {
    stripe: Stripe | null;
    elements: StripeElements | null;
    amount:string;
}

const CheckoutModalInProgress = ({stripe, elements, amount}: CheckoutModalInProgressProps) => {
    return (
        <Modal.Body>
            <CheckoutForm stripe={stripe} elements={elements} amount={amount} />
        </Modal.Body>
    )
}

export default CheckoutModalInProgress
