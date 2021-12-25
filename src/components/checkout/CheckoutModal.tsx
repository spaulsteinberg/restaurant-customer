import Modal from "react-bootstrap/Modal"
import {useElements, useStripe} from '@stripe/react-stripe-js';
import CheckoutModalHeader from "./CheckoutModalHeader"
import './checkout-styles.scss'
import CheckoutModalBody from "./CheckoutModalBody";
import CheckoutModalCompletionFooter from "./CheckoutModalCompletionFooter";
import { useHistory } from "react-router-dom";

type CheckoutModalProps = {
    show:boolean,
    amount:string,
    hasCompletedOrder: boolean,
    handleCancel: () => void;
}
const CheckoutModal = ({show, amount, hasCompletedOrder, handleCancel}:CheckoutModalProps) => {

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const completedOrderHeader = "Thank you for your order!";
    const inProgressOrderHeader = "Please enter you payment information:";

    const handleOnCreateNewOrderClick = () => {
        // TODO - clear state here
        history.push("/ordering");
    }

    /*
    TODO:
        2) delete cart cookie identifier. on new order click, clear the redux state as well
        3) if a user refreshes, a new cookie should be requested (already written in useCookies hook in app)
        4) old menu destroy cookues and redirect
    */

    return (
        <Modal show={show} onHide={handleCancel} backdrop={hasCompletedOrder ? "static" : true}>
            <CheckoutModalHeader title={ hasCompletedOrder ? completedOrderHeader : inProgressOrderHeader } orderComplete={hasCompletedOrder} />
            <CheckoutModalBody stripe={stripe} elements={elements} amount={amount} orderComplete={hasCompletedOrder} />
            { hasCompletedOrder && <CheckoutModalCompletionFooter handleClick={handleOnCreateNewOrderClick}/>}
        </Modal>
    )
}

export default CheckoutModal