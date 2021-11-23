import { Stripe, StripeElements } from '@stripe/stripe-js';
import React from 'react'
import CheckoutModalCompletion from './CheckoutModalCompletion';
import CheckoutModalInProgress from './CheckoutModalInProgress';

type CheckoutModalBodyProps = {
    stripe: Stripe | null;
    elements: StripeElements | null;
    amount:string;
    orderComplete: boolean;
}

const CheckoutModalBody = ({stripe, elements, amount, orderComplete}:CheckoutModalBodyProps) => {

    return (
        <React.Fragment>
            {
                orderComplete ? <CheckoutModalCompletion /> : <CheckoutModalInProgress stripe={stripe} elements={elements} amount={amount} />
            }
        </React.Fragment>
    )
}

export default CheckoutModalBody
