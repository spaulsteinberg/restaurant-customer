import Form from "react-bootstrap/Form";
import {CardElement} from '@stripe/react-stripe-js';
import FormGroup from "react-bootstrap/FormGroup";
import CheckoutFormItemFeedback from "./CheckoutFormItemFeedback";

type CheckoutFormStripeFieldsProps = {
    handleChange: (e:any) => void,
    error:string
}

const CheckoutFormStripeFields = ({handleChange, error}:CheckoutFormStripeFieldsProps) => {

    return (
        <FormGroup className="checkout-cart-form-item">
            <Form.Label>Card Information</Form.Label>
            <CardElement onChange={handleChange}/>
            {error && <CheckoutFormItemFeedback error={error} touched={undefined} hasTouchedProperty={false} /> }
        </FormGroup>
    )
}

export default CheckoutFormStripeFields;