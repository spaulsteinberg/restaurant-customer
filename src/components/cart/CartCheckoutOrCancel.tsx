import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";

type CartCheckoutOrCancelProps = {
    onCancel: (e:SyntheticEvent) => void;
    onCheckout: () => void;
}

const CartCheckoutOrCancel = ({onCancel, onCheckout}: CartCheckoutOrCancelProps) => {
    return (
        <div className="cancel-checkout-button-container">
            <Button variant="outline-light" className="mx-1" id="cancel-order-button" onClick={onCancel}>Cancel</Button>
            <Button variant="primary" className="mx-1" onClick={onCheckout}>Checkout</Button>
        </div>
    )
}

export default CartCheckoutOrCancel
