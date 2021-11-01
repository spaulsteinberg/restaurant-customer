import { ChangeEvent, SyntheticEvent } from 'react'
import Form from "react-bootstrap/Form";
import CheckoutPaymentButton from "./CheckoutPaymentButton";
import CheckoutFormItem from "./CheckoutFormItem";
import { ICheckoutForm } from '../../models/ICheckoutForm';
import { Stripe } from '@stripe/stripe-js';
import CheckoutFormStripeFields from './CheckoutFormStripeFields';

type CheckoutFormProps = {
    form:ICheckoutForm;
    submit: (event:SyntheticEvent) => void;
    inputChange: (e:ChangeEvent<HTMLInputElement>) => void;
    stripe:Stripe|null;
}

const CheckoutForm = ({form, submit, inputChange, stripe}: CheckoutFormProps) => {
    return (
        <Form onSubmit={submit}>
            <CheckoutFormItem
                labelText="First Name"
                name="firstName"
                id="form-first"
                type="text"
                value={form.firstName}
                onChange={inputChange} />
            <CheckoutFormItem
                labelText="Last Name"
                name="lastName"
                id="form-last"
                type="text"
                value={form.lastName}
                onChange={inputChange} />
            <CheckoutFormItem
                labelText="Email"
                name="email"
                id="form-email"
                type="text"
                value={form.email}
                onChange={inputChange} />
            <CheckoutFormStripeFields />
            <CheckoutPaymentButton isDisabled={!stripe ? true : false} />
        </Form>
    )
}

export default CheckoutForm
