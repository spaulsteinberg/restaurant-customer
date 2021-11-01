import Form from "react-bootstrap/Form";
import {CardElement} from '@stripe/react-stripe-js';
import FormGroup from "react-bootstrap/FormGroup";
type CheckoutFormStripeFieldsProps = {

}

const CheckoutFormStripeFields = (props:CheckoutFormStripeFieldsProps) => {
    return (
        <FormGroup className="checkout-cart-form-item">
                <Form.Label>Card Information</Form.Label>
                <CardElement />
            </FormGroup>
    )
}

export default CheckoutFormStripeFields;