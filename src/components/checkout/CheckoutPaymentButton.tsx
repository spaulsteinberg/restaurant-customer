import Button from "react-bootstrap/Button";

type CheckoutPaymentButtonProps = {
    isDisabled: boolean
}
const CheckoutPaymentButton = (props:CheckoutPaymentButtonProps) => {
    return (
        <div className="text-center">
            <Button type="submit" variant="primary" disabled={props.isDisabled}>Pay</Button>
        </div>
    )
}

export default CheckoutPaymentButton
