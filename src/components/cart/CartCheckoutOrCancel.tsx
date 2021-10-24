import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";

type CartCheckoutOrCancelProps = {
    onCancel: (e:SyntheticEvent) => void;
    onCheckout: () => void;
}

const CartCheckoutOrCancel = ({onCancel, onCheckout}: CartCheckoutOrCancelProps) => {
    return (
        <div className="cancel-checkout-button-container">
            {/* should be two components here, one for buttons and one for the modal form confirming cancellation*/}
            <Button variant="outline-light" className="mx-1" id="cancel-order-button" onClick={onCancel}>Cancel</Button>
            <Button variant="primary" className="mx-1" onClick={onCheckout}>Checkout</Button>
        </div>
    )
}

export default CartCheckoutOrCancel
